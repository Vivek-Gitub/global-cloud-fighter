import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Footer from "./components/footer/Footer";
import Navbar from "./Navbar";


const App = () => {
  return(
    
    <>
    <Navbar/>
    
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>

    <Footer/>
    
    </>
  );
}

export default App;