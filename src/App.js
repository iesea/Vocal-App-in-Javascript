import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='acslogo.png' className="App-logo" alt="logo" />
      </header>
      <h1></h1>
      <Server_Button/>
    </div>
  );
}

function Server_Button() {
  return (
    <>
    <button style={{ backgroundColor: 'orange', margin: 10, alignContent: 'center'}}
    onClick={() => window.alert('Enter Log In Details')}>Log In</button>
    <button style={{ backgroundColor: 'lightblue'}}
      onClick={() => window.alert("Soooo, you want to sing? Sign up!")}
    >Sign Up</button>
    </>
  )
}

// function sayHello() {
//   return "MAgic beans from the market"
// }




export default App;
