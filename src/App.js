import React from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="">
      <Navbar title="REACT BEGINING" />
      <Routes>
        <Route path="/" element={ <Textarea/> } />
        <Route path="about" element={ <About/> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
  );
}

export default App;
