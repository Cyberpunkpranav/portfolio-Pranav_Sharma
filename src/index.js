import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Portfolio';
import { Introduction } from './Portfolio';
import { Work } from './Portfolio';
import { About } from './Portfolio';
import { Contact } from './Portfolio';
import { Education_details } from '../src/json'

import './Portfolio.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


function Packages() {
  const [mode, setmode] = useState("dark");
  const [background, setbackground] = useState("light")
  const [darkbtntext, lightbtntext] = useState("Enable Dark Mode");


  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      lightbtntext("Enable Light Mode");
      setbackground("dark");
      document.body.style.backgroundImage = 'url(/darkbackground.jpg)';

    } else {
      setmode("dark");
      lightbtntext("Enable Dark Mode")
      setbackground("light");
      document.body.style.backgroundImage = 'url(/lightbackground.jpg)';
    }
  }


  return (
    <div className='body'>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} btnmode={darkbtntext} />
        <Routes>
          <Route path='/' element={<Introduction mode={mode} toggleMode={toggleMode} btnmode={darkbtntext} data={Education_details} />} />
          <Route path='/Work' element={<Work mode={mode} toggleMode={toggleMode} backgroundmode={background} />} />
          <Route path='/About' element={<About mode={mode} toggleMode={toggleMode} backgroundmode={background} />} />
          <Route path='/Contact' element={<Contact mode={mode} toggleMode={toggleMode} backgroundmode={background} />} />
        </Routes>
      </Router>
    </div>
  );
}
ReactDOM.render(<Packages />, document.getElementById("root"));