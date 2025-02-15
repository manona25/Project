import React from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";


function App() {
  return (
      <div className="App">
        
    <Header />
    <Hero />
    <Services />
    <Projects />
    <Contacts />
    <Footer />
      </div>
  
  );
}

export default App;
