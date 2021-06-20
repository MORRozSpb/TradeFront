// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">


        <Header />
        <Nav />
        <Login />

      </div>
    </BrowserRouter>
  );
}

export default App;

