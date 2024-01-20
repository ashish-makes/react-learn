import './App.css';
import Info from './components/Info';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  return (
    <>
    <Navbar title="RaectLearn" link1="Home" link2="About" link3="Contact" link4="Privacy"/>
    <br/>
    <TextArea/>
    <br/>
    <Info/>
    </>
  );
}

export default App;
