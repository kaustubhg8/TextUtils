import "./App.css";
import AlertComp from "./Components/AlertComp";
// import About from './Components/About';
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const [first, setfirst] = useState(null)

  const showAlert = (message, type) =>{
    setfirst({msg: message,
    type: type
    });
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor="#082c6c";
      showAlert("Dark mode is enabled","Success")

    } else {
      setmode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode is enabled", "Success")

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
