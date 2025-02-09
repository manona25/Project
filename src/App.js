import "./App.css";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
function App() {
  return (
      <div className="App">
    <Contacts />
    <Footer />
    <Header />
    <Hero />
    <Projects />
    <Services />
      </div>
  
  );
}

export default App;
