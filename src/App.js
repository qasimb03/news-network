import './App.css';
import NewsList from './components/NewsList'
import React from 'react';


function App() {
  return (
    <div className="App">
      <h1> News Network </h1>
      <h3> A convient all-in-one news network </h3>
      <NewsList />
    </div>
  );
}

export default App;
