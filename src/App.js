import './App.css';
import React from 'react'
import Navbars from './component/Navbars';
import Home from './component/Home';
import Perfumes from './component/Perfumes';

function App() {
  const topfun=()=>{
    window.scrollTo(0,0)
  }
  return (
    <div className="App">
      <Navbars />
      <Home />
      <Perfumes />
      <button className='btn btn-danger top' onClick={topfun}>^</button>
    </div>
  );
}

export default App;
