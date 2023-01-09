import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import { Router } from '@reach/router';
import Contact from './Components/Contact';
import Involved from './Components/Involved';
import PastWork from './Components/PastWork';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Profile from './Components/Profile';
import Request from './Components/Request';

function App() {
  return (
    <div className="background">
      <Header />
      <Router> 
        <Home path="/home" default/>
        <About path="/about"/>
        <Contact path='/contact' />
        <Involved path='/involved' />
        <PastWork path='/pastwork' />
        <Login path='/login' />
        <SignUp path='/signup' />
        <Profile path='/profile' />
        <Request path='/request' />

      </Router>
      {/* <p>Hello Mate</p> */}
    </div>
  );
}

export default App;
