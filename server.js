const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');  // corsモジュールをインポート
const app = express();

// CORS 設定を有効にする
app.use(cors());  // 全てのオリジン（ドメイン）を許可


const server = http.createServer(app);
const io = socketio(server);

// ポート設定
const PORT = 5000; // Expressサーバーのポート

// CORS設定を有効にする
app.use(cors());  // すべてのリクエストを許可（特定のオリジンに制限も可能）

// JSONボディのパースを有効にする
app.use(bodyParser.json());  // POSTで送られるJSONデータを解析
app.use(bodyParser.urlencoded({ extended: true }));  // URLエンコードされたデータの解析

// リクエストログ用ミドルウェア
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// 簡単なユーザー情報（ハードコード）
const users = {
  penta: '1234',
  admin: 'adminpass',
};

// ログインAPI（POSTリクエスト）
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (users[username]) {
    if (users[username] === password) {
      res.json({ message: `ログイン成功！ようこそ ${username} さん` });
    } else {
      res.status(400).json({ message: 'パスワードが間違っています' });
    }
  } else {
    // 新規ユーザー登録
    users[username] = password;
    res.json({ message: `新規アカウントを作成しました！ようこそ ${username} さん` });
  }
});

// Socket.IOの接続イベント
io.on('connection', (socket) => {
  console.log('ユーザー接続:', socket.id);

  // チャットメッセージの送受信
  socket.on('chat message', (msg) => {
    // 受け取ったメッセージを全員に送信
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('ユーザー切断:', socket.id);
  });
});

// 静的ファイルの設定（Reactのビルド成果物など）
app.use(express.static(path.join(__dirname, 'public')));

// APIルート（GET）
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// サーバーを起動
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
