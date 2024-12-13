import logo from './logo.svg';
import './App.css';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './Pages/Home';

function App() {

  return (

   <div className= "App">
        <BrowserRouter  basename={document.baseURI.substring(document.baseURI.indexOf(window.location.origin) + window.location.origin.length, document.baseURI.lastIndexOf('/'))} >
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>


   </div>   
  );
}

export default App;
