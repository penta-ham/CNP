import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  // サーバーからメッセージを取得する
  useEffect(() => {
    fetch('http://localhost:3000/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // ログインフォームの送信処理
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // バックエンドにPOSTリクエスト
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      setMessage(response.data.message);  // サーバーからのメッセージを表示
    } catch (error) {
      // エラーハンドリング
      setMessage(error.response ? error.response.data.message : 'ログインエラー');
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="ユーザー名" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="パスワード" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">ログイン</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // バックエンドのSocket.IOサーバーに接続

const App = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  // メッセージ送信
  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('chat message', message);
    setMessage('');
  };

  // サーバーからメッセージを受信
  useEffect(() => {
    socket.on('chat message', (msg) => {
      setChatMessages((prevMessages) => [...prevMessages, msg]);
    });

    // クリーンアップ：コンポーネントがアンマウントされるときにイベントリスナーを解除
    return () => {
      socket.off('chat message');
    };
  }, []);

  return (
    <div>
      <h1>リアルタイムチャット</h1>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="メッセージを入力"
        />
        <button type="submit">送信</button>
      </form>

      <div>
        <h2>チャット履歴</h2>
        <ul>
          {chatMessages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
