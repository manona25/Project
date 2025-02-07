import React from "react";
import "./App.css";
import Data from "./Data";
import Card from "./Card";

function Flowers() {
  return (
    <div className="APP">
              {Data.map((flowers) => (
        <Card key={flowers.id} flowers={flowers} />
      ))}
    </div>
  );
}

export default Flowers;
