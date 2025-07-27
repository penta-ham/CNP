import React from 'react';
import 'bulma/css/bulma.min.css';

function Sidebar() {
  return (
    <aside
      className="menu has-background-light"
      style={{
        width: '20%',
        padding: '1.5rem',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // 画面の高さいっぱいにする
      }}
    >
      <p className="menu-label">メニュー</p>
      <ul className="menu-list" style={{ flexGrow: 1 }}>
        <li><a className="is-active" href="#">ホーム</a></li>
        <li><a href="#">チャット</a></li>
        <li><a href="#">プロフィール</a></li>
        <li><a href="#">設定</a></li>
      </ul>

      {/* メニューの下にテキストエリアとボタン */}
      <div style={{ marginTop: '1rem' }}>
        <textarea
          className="textarea"
          placeholder="メッセージを入力してください"
        ></textarea>
        <button className="button is-primary mt-2 is-fullwidth">送信</button>
      </div>
    </aside>
  );
}

export default Sidebar;
