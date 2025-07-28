import React from 'react';
import Sidebar from './component/Sidebar.jsx';
import Comment from './component/Comment.jsx';

function App() {
  return (
    <div className="columns">
      <div className="column is-one-quarter">
        <Sidebar />
      </div>
      <div className="column is-three-quarters">
        <Comment />
      </div>
    </div>
  );
}

export default App;
