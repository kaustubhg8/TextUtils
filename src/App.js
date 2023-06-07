import "./App.css";
// import About from './Components/About';
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor="grey";
    } else {
      setmode("light");
      document.body.style.backgroundColor="white";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container pt-3">
        {/* <About/> */}
        <Textform heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
