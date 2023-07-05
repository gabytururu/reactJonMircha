
import './App.css';
import MyPage from './components/MyPage';
import MyPageContext from './components/MyPageContext'
import Contador from './components/Contador';
import ContadorReducer from './components/ContadorReducer';
import ContadorReducerMejorado from './components/ContadorReducerMejorado';

function App() {
  return (
    <div className="App">
      <h1>React context API</h1>
      <a href="https://es.reactjs.org/docs/context.html" target="_blank" rel="noreferrer">Documentacion</a>
      <hr />
      <div>
        <h2>Use Reducer</h2> 
          <ContadorReducerMejorado/>
          <hr style={{maxWidth:'85px'}}/>       
          <ContadorReducer/>
          <hr style={{maxWidth:'85px'}}/>
          <Contador/>
      </div>
      <hr />
      <div>
        <h2>Context Api</h2>
          <MyPageContext/>          
          <MyPage/>
        </div>
    </div>
  );
}

export default App;
