import "./App.css";
import AlertComp from "./Components/AlertComp";
// import About from './Components/About';
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const [first, setfirst] = useState("Initial Condition")

  const showAlert = (message) =>{
    setfirst(message);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor="#082c6c";
      showAlert("This from showAlert IF statement")

    } else {
      setmode("light");
      document.body.style.backgroundColor="white";
      showAlert("This from showAlert ELSE statement")

    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <AlertComp alert={first}/>
      <div className="container pt-3">
        {/* <About/> */}
        <Textform heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
