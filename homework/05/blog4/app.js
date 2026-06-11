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

function getBoards() {
  return db.prepare('SELECT * FROM boards ORDER BY id').all();
}

app.get('/', (req, res) => {
  const posts = db.prepare(`
    SELECT posts.*, users.username AS author, boards.name AS board_name, boards.label AS board_label
    FROM posts JOIN users ON posts.author_id = users.id
    JOIN boards ON posts.board_id = boards.id
    ORDER BY posts.created_at DESC
  `).all();
  const boards = getBoards();
  res.render('index', { posts, boards, active: 'public', currentBoard: null });
});

app.get('/board/:id', (req, res) => {
  const board = db.prepare('SELECT * FROM boards WHERE id = ?').get(req.params.id);
  if (!board) return res.status(404).send('板塊不存在');
  const posts = db.prepare(`
    SELECT posts.*, users.username AS author, boards.name AS board_name, boards.label AS board_label
    FROM posts JOIN users ON posts.author_id = users.id
    JOIN boards ON posts.board_id = boards.id
    WHERE posts.board_id = ?
    ORDER BY posts.created_at DESC
  `).all(req.params.id);
  const boards = getBoards();
  res.render('index', { posts, boards, active: 'board', currentBoard: board });
});

app.get('/my', requireAuth, (req, res) => {
  const posts = db.prepare(`
    SELECT posts.*, users.username AS author, boards.name AS board_name, boards.label AS board_label
    FROM posts JOIN users ON posts.author_id = users.id
    JOIN boards ON posts.board_id = boards.id
    WHERE posts.author_id = ?
    ORDER BY posts.created_at DESC
  `).all(req.session.userId);
  const boards = getBoards();
  res.render('index', { posts, boards, active: 'my', currentBoard: null });
});

app.get('/user/:id', (req, res) => {
  const profile = db.prepare('SELECT id, username FROM users WHERE id = ?').get(req.params.id);
  if (!profile) return res.status(404).send('用戶不存在');
  const posts = db.prepare(`
    SELECT posts.*, users.username AS author, boards.name AS board_name, boards.label AS board_label
    FROM posts JOIN users ON posts.author_id = users.id
    JOIN boards ON posts.board_id = boards.id
    WHERE posts.author_id = ?
    ORDER BY posts.created_at DESC
  `).all(req.params.id);
  const boards = getBoards();
  res.render('index', { posts, boards, active: 'user', profile, currentBoard: null });
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
  const boards = getBoards();
  res.render('new', { boards });
});

app.post('/post/create', requireAuth, (req, res) => {
  const { title, content, board_id } = req.body;
  if (!title || !content) return res.status(400).send('標題和內容為必填');
  db.prepare('INSERT INTO posts (title, content, author_id, board_id) VALUES (?, ?, ?, ?)')
    .run(title, content, req.session.userId, board_id || 1);
  res.redirect('/');
});

app.get('/post/:id', (req, res) => {
  const post = db.prepare(`
    SELECT posts.*, users.username AS author, boards.name AS board_name, boards.label AS board_label
    FROM posts JOIN users ON posts.author_id = users.id
    JOIN boards ON posts.board_id = boards.id
    WHERE posts.id = ?
  `).get(req.params.id);
  if (!post) return res.status(404).send('文章不存在');
  const boards = getBoards();
  res.render('show', { post, boards });
});

app.get('/post/:id/edit', requireAuth, (req, res) => {
  const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
  if (!post) return res.status(404).send('文章不存在');
  if (post.author_id !== req.session.userId) return res.status(403).send('無權編輯');
  const boards = getBoards();
  res.render('edit', { post, boards });
});

app.post('/post/:id/update', requireAuth, (req, res) => {
  const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
  if (!post) return res.status(404).send('文章不存在');
  if (post.author_id !== req.session.userId) return res.status(403).send('無權編輯');
  const { title, content, board_id } = req.body;
  db.prepare('UPDATE posts SET title = ?, content = ?, board_id = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
    .run(title, content, board_id || 1, req.params.id);
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
