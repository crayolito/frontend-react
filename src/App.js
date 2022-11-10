import React, { useState, useEffect } from 'react';
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios'
function App() {
  const [data, setData] = useState({
    message: null
  });
  
  

  useEffect(() => {
    const  pruebas = async() => {
      const res =await  axios.get('http://localhost:3001/api')
      setData({
        message:  res.data.message
      })
    }
    pruebas()
  }, []);
console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data.message ? "Loading..." : data.message}</p>
      </header>
    </div>
  );
}

export default App;