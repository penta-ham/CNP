const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = 3000;

// 追加：リクエストログ用ミドルウェア
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// 簡単なユーザー情報（ハードコード）
const users = {
  penta: '1234',
  admin: 'adminpass'
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] && users[username] === password) {
    res.send(`<h1>ログイン成功！ようこそ ${username} さん</h1>`);
  } else {
    res.send('<h1>ログイン失敗：ユーザー名またはパスワードが違います。</h1><a href="/">戻る</a>');
  }
});

// Socket.IOの接続イベント
io.on('connection', (socket) => {
  console.log('ユーザー接続:', socket.id);

  socket.on('chat message', (msg) => {
    // 受け取ったメッセージを全員に送信
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('ユーザー切断:', socket.id);
  });
});

// サーバー起動
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
