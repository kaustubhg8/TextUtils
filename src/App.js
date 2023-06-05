
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
//let name = "Kaustubh";
function App() {
  return (
    <>
    <Navbar title = "TextUtils" />
    <div className='container pt-3'>
    <About/>
      {/* <Textform heading = "Enter the text to analyze"/> */}
    </div>
    
    </>
  );
}

export default App;
