import React,{useState} from 'react'
import './App.css';
import Home from './component/Home';
import { ModalTap } from './component/ModalTap';
import { NavBar } from './component/NavBar';


function App() {
 
  
  return(
    <div>
    <NavBar/>
      <Home />
      
    </div>
  )
 
}

export default App;
