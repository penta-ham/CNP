import React from 'react';
import Sidebar from './component/Sidebar';
import Comment from './component/Comment';
import './App.css';


function Greeting() {
  return <h1>こんにちは！</h1>;
}

function App() {
  return (
    <div className="columns is-gapless" style={{ margin: 0, padding: 0 }}>
      <div className="column is-one-quarter"> {/* 40% */}
        <Sidebar />
      </div>
      <div className="column is-three-fifths"> {/* 60% */}
        <Comment />
      </div>
    </div>
  );
}


export default App;
