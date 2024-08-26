import React,{useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'


const TextForm = (props) => {
    const handleUpClick= ()=>{
        //console.log("Upper click clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange= (event)=>{ // thi is evenrt handler 
        //console.log("On change");
        setText(event.target.value);
    }
    const handleLowClick= ()=>{
        let newtText=text.toLowerCase();
        setText(newtText);
    }
    const handleClearClick = ()=>{
        let newText=" ";
        setText(newText);
    }
    const handleCopyClick = ()=>{

    }

    const [text, setText] = useState('');
  //text="new enter"; //wrong way to change the state
  //setText="new Enter";// right way to change the state
  
  return (
    <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control " value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Conver to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowClick}>Conver to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
            <CopyToClipboard text={text} onCopy={(text, result) => console.log()  /* this is for th copy clipboard */}> 
                <button className='btn btn-primary mx-1'>Copy To Clipboard</button>
            </CopyToClipboard>
            
            
        </div>
        <div className="container">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008* text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}

export default TextForm
