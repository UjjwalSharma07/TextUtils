import "./App.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import Alert from "./components/Alert";
import React, {useState} from 'react';
function App() {

const [mode, setmode] = useState('light');
const [alert,setAlert] = useState(null);

const showAlert =(messege,type)=>{
      setAlert({
        msg: messege,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
}
const toggleMode =() =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.background='#172034';
      showAlert("Dark mode has enabled.","success");
    }
    else{
      setmode('light');
      document.body.style.background='white';
      showAlert("Light mode has enabled.","success");
    } 
}

  return (
    <>
      <Navbar title= "TexUtils"  mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <Alert alert={alert}/>
      <TextFrom showAlert={showAlert} heading = "Enter the text to analize below" mode={mode} />
      {/* <About/> */}
      

      </div>
    </>
  );
}

export default App;
