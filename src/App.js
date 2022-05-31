import './App.css';
import Navbar from './Components/Navbar';
import React,{useState} from 'react'
import Textform from './Components/Textform';
import Footer from './Components/Footer';

function App() {
   const [mode, setMode] = useState('Dark');
   const toggleMode=()=>{
       if(mode==='Dark')
         setMode('Light');
       else 
         setMode('Dark');
        console.log('Clicked for background change');
      document.body.style.backgroundColor=(mode==='Dark'?'#070F46':'white');
   }
  return (
    <>
       <Navbar mode={mode} changeMode={toggleMode}/>;
       <Textform mode={mode}/>
       <Footer/>
    </>
  );
}

export default App;
