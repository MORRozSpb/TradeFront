// import logo from './logo.svg';
 
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">


        <Header />
        <Nav />
        <Main />

      </div>
    </BrowserRouter>
  );
}

export default App;

