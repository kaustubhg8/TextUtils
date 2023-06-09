import "./App.css";
import AlertComp from "./Components/AlertComp";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
// import {
//   BrowserRouter,

//   Routes,

//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [first, setfirst] = useState(null);

  const showAlert = (message, type) => {
    setfirst({ msg: message, type: type });
    setTimeout(() => {
      setfirst(null);
    }, 1500);
  };

  const switchMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "orange";
      showAlert("Orange mode is enabled", "success");
      document.title = "TextUtils hahaha";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#082c6c";
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils hahaha dark";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils hahaha light";
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          switchMode={switchMode}
        />
        <AlertComp alert={first} />
        <div className="container pt-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" />}></Route>
          </Routes> */}
          <Textform showAlert={showAlert} heading="Enter the text to analyze" />
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
