import Sidebar from './component/Sidebar';
import Comment from './component/Comment'

function Greeting() {
  return <h1>こんにちは！</h1>;
}

function App() {
  return (
    <div>
      <Sidebar />  {/* ← コンポーネントの呼び出し */}
      <Comment />
    </div>
  );
}

export default App;
