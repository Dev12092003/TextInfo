
import './App.css';
//import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light') // whether the dark mode is enable or not 
  const [alert, setAlert] = useState(null)
  
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#212224';
      showAlert("Dark mode is enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enable","success"); 
    }
  }

  const showAlert = (message,type)=>{ ///this function use for the show the alert message
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter Text to analyze" mode={mode}/>
        {/* <About/> */}
      </div>
      
    </>

  );
}


export default App;
