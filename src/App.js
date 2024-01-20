import './App.css';
import Info from './components/Info';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const [btnTxt, setBtnTxt] = useState("Enable dark mode globally");

  const toggleMode = () => {
    if (mode.backgroundColor === 'white') {
      document.documentElement.style.backgroundColor = 'black';
      document.documentElement.style.color = 'white';
      setMode({
        backgroundColor: 'black',
        color: 'white'
      });
      setBtnTxt("Enable light mode globally");
    } else {
      document.documentElement.style.backgroundColor = 'white';
      document.documentElement.style.color = 'black';
      setMode({
        backgroundColor: 'white',
        color: 'black'
      });
      setBtnTxt("Enable dark mode globally");
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} title="ReactLearn" link1="Home" link2="About" link3="Contact" link4="Privacy" />
        <button onClick={toggleMode}>{btnTxt}</button>
        <br />
        <br />
        <Routes>
          <Route path='/' element={<TextArea mode={mode} />} />
          <Route path='/about' element={<Info />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
