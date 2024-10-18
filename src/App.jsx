import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/NavBar/NavBar";
import Hero from "./components/Home/Home";
import About from "./components/Home/About";
import Category from "./components/Catergory/Catergory";
import Contact from "./components/Home/Contact";

import Footer from "./components/Footer/Footer";
import HeroBanner from "./components/Home/Home";
// import Slicer from "./components/Slicer/Slicer";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
          {/* You can add more routes here */}
          {/* <Route path="/slicer" element={<Slicer />} /> */}
        </Routes>
        {/* <Slicer /> */}{" "}
        {/* This can be removed or left commented if not needed */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
