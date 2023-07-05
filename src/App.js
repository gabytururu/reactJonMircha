
import './App.css';
import MyPage from './components/MyPage';
import MyPageContext from './components/MyPageContext'

function App() {
  return (
    <div className="App">
      <h1>React context API</h1>
      <a href="https://es.reactjs.org/docs/context.html" target="_blank" rel="noreferrer">Documentacion</a>
      <hr />
      <MyPageContext/>
      <hr />
      <MyPage/>
    </div>
  );
}

export default App;
