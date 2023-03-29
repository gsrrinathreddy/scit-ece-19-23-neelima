import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AboutMe from './Pages/AboutMe';
import Qualification from './Pages/Qualification';
import Experiance from './Pages/Experiance';
import Hobbies from './Pages/Hobbies';
import Skills from './Pages/Skills';

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <Routes>
        <Route path="AboutMe" element={<AboutMe/>}/>
        <Route path="Qualification" element={<Qualification/>}/>
        <Route path="Experiance" element={<Experiance/>}/>
        <Route path="Hobbies" element={<Hobbies/>}/>
        <Route path="Skills" element={<Skills/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
