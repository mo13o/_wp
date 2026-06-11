const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'blog-secret-key-123',
  resave: false,
  saveUninitialized: false
}));

function requireAuth(req, res, next) {
  if (!req.session.userId) return res.redirect('/login');
  next();
}

function getCurrentUser(req) {
  if (!req.session.userId) return null;
  return db.prepare('SELECT id, username FROM users WHERE id = ?').get(req.session.userId);
}

app.use((req, res, next) => {
  res.locals.user = getCurrentUser(req);
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
  const posts = db.prepare(`
    SELECT posts.*, users.username AS author
    FROM posts JOIN users ON posts.author_id = users.id
    ORDER BY posts.created_at DESC
  `).all();
  res.render('index', { posts, active: 'public' });
});

app.get('/my', requireAuth, (req, res) => {
  const posts = db.prepare(`
    SELECT posts.*, users.username AS author
    FROM posts JOIN users ON posts.author_id = users.id
    WHERE posts.author_id = ?
    ORDER BY posts.created_at DESC
  `).all(req.session.userId);
  res.render('index', { posts, active: 'my' });
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const { username, password, confirm } = req.body;
  if (!username || !password) return res.status(400).send('帳號和密碼為必填');
  if (password !== confirm) return res.status(400).send('兩次密碼不符');
  const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(username);
  if (existing) return res.status(400).send('帳號已存在');
  const hash = bcrypt.hashSync(password, 10);
  db.prepare('INSERT INTO users (username, password) VALUES (?, ?)').run(username, hash);
  res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).send('請輸入帳號和密碼');
  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(400).send('帳號或密碼錯誤');
  }
  req.session.userId = user.id;
  res.redirect('/');
});

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.get('/post/new', requireAuth, (req, res) => {
  res.render('new');
});

app.post('/post/create', requireAuth, (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).send('標題和內容為必填');
  db.prepare('INSERT INTO posts (title, content, author_id) VALUES (?, ?, ?)')
    .run(title, content, req.session.userId);
  res.redirect('/');
});

app.get('/post/:id', (req, res) => {
  const post = db.prepare(`
    SELECT posts.*, users.username AS author
    FROM posts JOIN users ON posts.author_id = users.id
    WHERE posts.id = ?
  `).get(req.params.id);
  if (!post) return res.status(404).send('文章不存在');
  res.render('show', { post });
});

app.get('/post/:id/edit', requireAuth, (req, res) => {
  const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
  if (!post) return res.status(404).send('文章不存在');
  if (post.author_id !== req.session.userId) return res.status(403).send('無權編輯');
  res.render('edit', { post });
});

app.post('/post/:id/update', requireAuth, (req, res) => {
  const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
  if (!post) return res.status(404).send('文章不存在');
  if (post.author_id !== req.session.userId) return res.status(403).send('無權編輯');
  const { title, content } = req.body;
  db.prepare('UPDATE posts SET title = ?, content = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
    .run(title, content, req.params.id);
  res.redirect('/post/' + req.params.id);
});

app.post('/post/:id/delete', requireAuth, (req, res) => {
  const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
  if (!post) return res.status(404).send('文章不存在');
  if (post.author_id !== req.session.userId) return res.status(403).send('無權刪除');
  db.prepare('DELETE FROM posts WHERE id = ?').run(req.params.id);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Blog running at http://localhost:${PORT}`);
});
