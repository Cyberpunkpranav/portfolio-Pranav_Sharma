import ReactDOM from 'react-dom';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Portfolio';
import { Introduction } from './components/Portfolio';
import { Work } from '../src/components/Portfolio';
import { About } from '../src/components/Portfolio';
import { Contact } from '../src/components/Portfolio';
import { Education_details } from './components/json'


function App() {
  const [mode, setmode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
    } else {
      setmode("dark");
    }
  }

  return (

      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path='/' element={<Introduction mode={mode} toggleMode={toggleMode} data={Education_details} />} />
          <Route path='/Work' element={<Work mode={mode} toggleMode={toggleMode}  />} />
          <Route path='/About' element={<About mode={mode} toggleMode={toggleMode}  />} />
          <Route path='/Contact' element={<Contact mode={mode} toggleMode={toggleMode}  />} />
        </Routes>
      </Router>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));