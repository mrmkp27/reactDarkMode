import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'; 


import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background='#042743';
    }
    else{
      setMode('light');
      document.body.style.background='white';
    }

  }
  return (
    <>
  
<Navbar title="TextUtils"  about="About" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3" ><TextForm heading="Enter your text to analyze below" mode={mode}/></div>

{/* <div className="container my-5"><About/></div> */}

    </>
  );
}

export default App;
