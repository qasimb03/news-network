import './App.css';
import NewsList from './components/NewsList'
import React from 'react';
import NavBar from './components/NavBar';
import Stocks from './pages/Stocks';
import Home from './pages/Home';
import Presidency from './pages/Presidency';
import Sports from './pages/Sports';
import Economy from './pages/Economy'


function App() {
  let Component
  switch(window.location.pathname)
  {
    case "/":
      Component = <Home />
      break

    case "/sports":
      Component = <Sports />
      break
    case "/presidency": 
      Component = <Presidency />
      break
    case "/economy" : 
      Component = <Economy/>
      break
    case "/stocks" : 
      Component = <Stocks />
      break

  }

  return (
    <><NavBar/>

    <div className='Container'>
      {Component}
    </div>
    </>
    
  );
}

export default App;
