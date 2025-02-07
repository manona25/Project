import React from "react";
import "./App.css";
import Flowers from "./Flowers"
function App() {
  return (
    <div className="Flower">
      <h1>The Beauty of Flowers</h1>
      <p>
        Flowers are nature’ 
        vibrant gift, symbolizing beauty, love, and life. 
        With their variety of colors and fragrances, <br />flowers bring joy, warmth, and inspiration to our surroundings.
      </p>
      <div className="APP">
      <Flowers />
      </div>
    </div>
  );
}

export default App;
