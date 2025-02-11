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
    <Contacts />
    <Footer />
    <Header />
    <Hero />
    <Services />
    <Projects />

      </div>
  
  );
}

export default App;
