import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OurProducts from "./components/OurProducts";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <OurProducts/>
      <Footer/>
    </div>
  );
}

export default App;
