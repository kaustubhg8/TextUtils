import React, { useState } from "react";

export default function Textform(props) {
  const handleUPClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };
  const handleLPClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  // const handleRemoveNumersClick = ()=> {
  //   let Textarr = text.split(' ');
  //   let newStr = "";
  //   Textarr.forEach(elementArr => {
  //     elementArr.forEach(element => {
  //       if (element != number) {

  //       }
  //     });
  //   });
  // }

  const handleRemoveExtraSpacesClick = () => {
    let TextArr = text.split(" ");
    let joinedWords = "";
    console.log(TextArr);
    //   TextArr.forEach((elem)=>{
    //     if(elem[0] != undefined){
    //         joinedWords += elem + " ";
    //         console.log(joinedWords);
    //     }
    // })
    TextArr.forEach(funct);
    function funct(item) {
      if (item[0] !== undefined) {
        console.log(typeof item);
        joinedWords += item + " ";
      }
    }
    setText(joinedWords);
    props.showAlert("Removed extra spaces", "success");
  };

  const handleOnChange = (event) => {
    // console.log("Handle on change");    // this is using arrow function
    setText(event.target.value);
  };
  // function handleOnChange(e) {
  //     console.log("Handle on change");    // we have done this without using arrow function
  //     setText(e.target.value);
  //   }

  const handleCopyClick = () => {
    // console.log("I'm a copy");
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>
          {props.heading}
        </h1>
        <div className="my-2">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            // style={{backgroundColor: "grey"}}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "grey",
              color: props.mode === "dark" ? "green" : "white",
            }}
          ></textarea>
        </div>
        <button style={{ color: props.mode === "dark" ? "white" : "black" }} className="btn btn-primary mx-1 my-1" onClick={handleUPClick}>
          Convert to upper case
        </button>
        <button style={{ color: props.mode === "dark" ? "white" : "black" }} className="btn btn-primary mx-1 my-1" onClick={handleLPClick}>
          Convert to lower case
        </button>
        <button style={{ color: props.mode === "dark" ? "white" : "black" }} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button style={{ color: props.mode === "dark" ? "white" : "black" }}
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemoveExtraSpacesClick}
        >
          Remove extra spaces from the Text
        </button>
        <button style={{ color: props.mode === "dark" ? "white" : "black" }} className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        {/* <button className="btn btn-primary mx-1" onClick={handleRemoveNumersClick}>Remove numbers from the Text</button> */}
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((element) =>{return element.length!==0}).length} words and {text.length} caracters
        </p>
        <p>
          Time required to read the para = {text.split(" ").filter((element) =>{return element.length!==0}).length * 0.008}{" "}
          Minuts{" "}
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
