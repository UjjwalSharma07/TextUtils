import React, {useState} from 'react'

export default function TextFrom(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked" + text);
      let newtext = text.toLowerCase();
      props.showAlert("Converted to lowercase!","success");
      setText(newtext)
    }
    const handleClearClick = ()=>{
      props.showAlert("Clear Textbox!","success");
      setText('')
    }
    const handleExtraSpaces = ()=>{
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "))
      props.showAlert("Remove extra spaces!","success");
    }
    // const handleCopy = ()=>{
    //   console.log("i m copy");
    //   let text = document.getElementById("myBox");
    //   text.select();
    //   navigator.clipboard.writeText(text.value);
    // }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // setText("new text") for update text
  return (
    <>
    <div className="container " style={{color:props.mode==='dark' ? 'white' : '#172034'}}>
        <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" placeholder="Enter text here" value={text} onChange={handleOnChange} 
        style={{backgroundColor:props.mode==='dark' ? 'grey' : 'white' , color:props.mode==='dark' ? 'white' : '#172034'}} rows="8"></textarea>
        <button type="button" className="btn btn-primary my-3" onClick={handleUpClick} >Convet To Uppercase</button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleLoClick} >Convet To Lowercase</button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleClearClick} >Clear All</button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces} >Remove Extra spaces</button>
        {/* <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleCopy} >Copy Text</button> */}
      </div>
    </div>
    <div className="container " style={{color:props.mode==='dark' ? 'white' : '#172034'}}>
      <h1>Your text Summary</h1>
      <p>{text.split("").length} words and {text.length} char</p>
      <p> {0.008*text.split("").length} Mins/sec Read Time</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in textbox to preview here"}</p>
    </div>
    </>
  );
}
