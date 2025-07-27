import React from 'react';
import 'bulma/css/bulma.min.css';

function Message() {
  return (
    <div className="box is-flex is-align-items-start">
      {/* アイコン */}
      <span className="icon is-large has-text-info mr-3 mt-1">
        <i className="fas fa-reply fa-2x"></i>
      </span>

      {/* 本文 */}
      <div>
        <strong>ユーザー名</strong> <small>2時間前</small>
        <p>こんにちは！これはテストメッセージです。</p>
      </div>
    </div>
  );
}

export default Message;
