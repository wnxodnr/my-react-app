import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';


function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {


    axios({
      method: "get", // 통신 방식
      url: "/api/hello", // 서버
    })
    .then(function(response) {
      console.log(response.data)
      setMessage(response.data);
      console.log(response.status)
      console.log(response.statusText)
      console.log(response.headers)
      console.log(response.config)
    })
  },[])
/*
    fetch('/api/hello', 
        { 
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        } )
        .then(response => response.text())
        .then(message => {
            setMessage(message);
        });
},[])
*/

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{message}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
