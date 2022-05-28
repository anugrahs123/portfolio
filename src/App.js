import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Top from './Components/Top/Top';
import Main from './Components/Main/Main';
import Project from './Components/Project/Project';

function App() {
  return (
    <div className="App">
      <Header/>
      <Top/>
      <Main/>
      <Project/>
    </div>
  );
}

export default App;
