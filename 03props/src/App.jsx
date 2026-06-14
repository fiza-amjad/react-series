import React, { useState } from "react";
import "./App.css";

import Card from "./components/Card.jsx";
function App() {
 

  return (
    <>
      <h1 className="bg-green-400">Tailwind Test</h1>
     
     <Card username = "fiza" btnText="click me "/>
     <Card username = "samikha" btnText="visit me"/>
    </>
  );
}

export default App;

