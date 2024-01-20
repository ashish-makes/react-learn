import './App.css';
import Info from './components/Info';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, {useState} from 'react'

function App() {

  const[mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const[btnTxt, setbtnTxt] = useState("Enable dark mode globally")

  const toggleMode = () => {
    if (mode.backgroundColor === 'white') {
      document.documentElement.style.backgroundColor = 'black';
      document.documentElement.style.color = 'white';
      setMode({
        backgroundColor: 'black',
        color: 'white'
      });
      setbtnTxt("Enable light mode globally");
    } else {
      document.documentElement.style.backgroundColor = 'white';
      document.documentElement.style.color = 'black';
      setMode({
        backgroundColor: 'white',
        color: 'black'
      });
      setbtnTxt("Enable dark mode globally");
    }
  };
  
  return (
    <>
    <Navbar mode={mode} title="RaectLearn" link1="Home" link2="About" link3="Contact" link4="Privacy"/>
    <button onClick={toggleMode}>{btnTxt}</button>
    <br/>
    <TextArea mode={mode}/>
    <br/>
    <Info/>
    </>
  );
}

export default App;
