cotya



概要
cotya は PENTA_5 が開発中の次世代SNSプラットフォームです。
モダンな技術で構築され、リアルタイムに近い快適なユーザー体験を目指しています。
シンプルで直感的な使い心地とスケーラビリティを兼ね備えたサービスです。

特徴
🚀 モダンでレスポンシブなUI（Bulma CSSフレームワーク採用）

🔐 安全なログイン機能（将来的にJWT/OAuth対応予定）

📱 モバイルフレンドリーな設計（PWA対応を視野に）

💬 リアルタイムチャット機能（現在開発中、WebSocket利用予定）

🛠️ 拡張しやすいモジュール構造（Node.js + Express）

技術スタック
フロントエンド	バックエンド	その他
HTML5 / CSS3 / JavaScript	Node.js	Git（バージョン管理）
Bulma (CSSフレームワーク)	Express	Google Fonts（フォント利用）
マテリアルデザイン（検討中）	REST API / WebSocket	MongoDB（検討中）

はじめ方
bash
コピーする
編集する
# リポジトリをクローン
git clone https://github.com/yourusername/cotya.git

# ディレクトリに移動
cd cotya

# 依存パッケージをインストール
npm install

# サーバーを起動
npm start

# ブラウザで http://localhost:3000 を開く
プロジェクト構成
csharp
コピーする
編集する
cotya/
├── public/               # 静的ファイル（HTML/CSS/JS/画像など）
├── server.js             # Expressサーバーのエントリポイント
├── package.json          # 依存関係とスクリプト設定
├── README.md             # このドキュメント
└── ...
開発ロードマップ
マイルストーン	状態	説明
トップページUI	✅ 完了	Bulmaを使ったレスポンシブデザイン
ログインページ	✅ 完了	基本的なログイン機能とフォーム検証
ダッシュボード	🔄 開発中	ユーザーの活動拠点ページ
プロフィールページ	🔜 予定	ユーザー情報編集とカスタマイズ
リアルタイムチャット	🔜 予定	WebSocketによるリアルタイム通信機能
認証機能の強化	🔜 予定	JWTやOAuthによる認証方式の導入

貢献について
ご協力大歓迎です！
詳細は CONTRIBUTING.md をご覧ください。

ライセンス
MITライセンスのもと公開しています。詳しくは LICENSE ファイルを参照してください。

お問い合わせ
PENTA_5による開発・運営中です。
ご意見・ご質問はGitHubのIssueやPull Requestでお待ちしています！
