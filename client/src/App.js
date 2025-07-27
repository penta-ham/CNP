import Sidebar from './component/Sidebar';

function Greeting() {
  return <h1>こんにちは！</h1>;
}

function App() {
  return (
    <div>
      <Sidebar />  {/* ← コンポーネントの呼び出し */}
    </div>
  );
}

export default App;
