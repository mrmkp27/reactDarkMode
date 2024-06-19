import React, {useState} from 'react'


export default function TextForm(props){
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked");
        let NewText=text.toUpperCase();
        setText(NewText);

    }
    const handleLowClick=()=>{
        let NewText2=text.toLowerCase();
        setText(NewText2);
    }
    const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);

    }
    const handleClearClick=()=>{
        let NewText2=" ";
        setText(NewText2);
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange = (event)=>{
        // console.log("OnChange");
        setText(event.target.value);           

    }

    const[text, setText]=useState('Enter text here' );
    
   

    
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your summary is here!</h2>
        <p>{text.split(" ").length}words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read above paragraph</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

