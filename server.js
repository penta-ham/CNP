const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// 簡単なユーザー情報（ハードコード）
const users = {
  penta: '1234',
  admin: 'adminpass'
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] && users[username] === password) {
    // ログイン成功時の処理（リダイレクトなど自由に変更可能）
    res.send(`<h1>ログイン成功！ようこそ ${username} さん</h1>`);
  } else {
    res.send('<h1>ログイン失敗：ユーザー名またはパスワードが違います。</h1><a href="/">戻る</a>');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
