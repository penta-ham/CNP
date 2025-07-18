const express = require('express');
const app = express();
const PORT = 3000;

// 静的ファイル（HTMLやCSSなど）を配信する設定
app.use(express.static('public'));

// ルートにアクセスしたときの処理
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
