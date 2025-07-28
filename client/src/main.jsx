import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // 拡張子も含めて指定すると確実です
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
