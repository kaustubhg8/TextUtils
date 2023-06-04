import React, {useState} from 'react';

export default function Textform(props) {
    const handleUPClick = ()=> {
        console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=> {
        console.log("Handle on change");    // this is using arrow function
        setText(event.target.value);
    }
    // function handleOnChange(e) {
    //     console.log("Handle on change");    // we have done this without using arrow function
    //     setText(e.target.value);
    //   }

    const [text, setText] = useState('Enter text here');
  return (
    <div>
        
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUPClick}>Convert to upper case</button>
    </div>
  )
}
