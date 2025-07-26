import React, { useState } from 'react';
import axios from 'axios';  // axiosをインポート

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // バックエンドAPIにPOSTリクエストを送信
      const response = await axios.post('http://localhost:5000/login', { username, password });
      setMessage(response.data.message);  // レスポンスのメッセージを表示
    } catch (error) {
      setMessage(error.response?.data.message || 'エラーが発生しました');
    }
  };

  return (
    <div>
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

export default LoginForm;
