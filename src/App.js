import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'; 
import Alert from './components/Alert';


import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background='#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.background='white';
      showAlert("Light Mode has been enabled", "success");
    }

  }
  return (
    <>
   
  
<Navbar title="TextUtils"  about="About" mode={mode} toggleMode={toggleMode}/> 
<Alert alert={alert}/>
<div className="container my-3" ><TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/></div>

{/* <div className="container my-5"><About/></div> */}



    </>
  );
}

export default App;
