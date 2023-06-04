
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
//let name = "Kaustubh";
function App() {
  return (
    <>
    <Navbar title = "TextUtils" />
    <div className='container pt-3'>
      <Textform heading = "Enter the text to analyze"/>
    </div>
    </>
  );
}

export default App;
