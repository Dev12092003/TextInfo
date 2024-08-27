import React,{useState} from 'react'
//import {CopyToClipboard} from 'react-copy-to-clipboard'


const TextForm = (props) => {
    const handleUpClick= ()=>{
        //console.log("Upper click clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");  // this is come from app.js inistilize this
    }
    const handleOnChange= (event)=>{ // thi is evenrt handler 
        //console.log("On change");
        setText(event.target.value);
    }
    const handleLowClick= ()=>{
        let newtText=text.toLowerCase();
        setText(newtText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick = ()=>{
        let newText=" ";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleCopyClick = ()=>{
        var newtext=document.getElementById("myBox");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied","success");
    }

    const handleExtraSpace = ()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed Extra Space","success");
    }

    const [text, setText] = useState('');
  //text="new enter"; //wrong way to change the state
  //setText="new Enter";// right way to change the state
  
  return (
    <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control " value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#212224':'white' , color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Conver to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Conver to Lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
            {/* <CopyToClipboard text={text} onCopy={(text, result) => console.log()  // this is for th copy clipboard }> 
                <button className='btn btn-primary mx-1'>Copy To Clipboard</button>
            </CopyToClipboard> */}
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopyClick}>Copy</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Remove Extra Space</button>
            
            
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
            <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}

export default TextForm
