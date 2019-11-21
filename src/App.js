import React, { useState, useEffect } from "react";
//import { CSSTransition } from "react-transition-group";
//import Transition from "./components/Transition";
import Navbar from "./components/Navbar";
//import Slide from "./components/Slider";
import styled from "styled-components";
//import data from "./data/data";
import "./App.css";

/* const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
`; */

function App() {
  /* const [inProp, setInProp] = useState(false);
  // const [appearHome, setAppearHome] = useState(true);
  const [property, setProperty] = useState(data.properties[0]);

  const nextProperty = () => {
    setInProp(!inProp);
    const newIndex = property.index + 1;
    setProperty(data.properties[newIndex]);
  };

  const prevProperty = () => {
    const newIndex = property.index - 1;
    setProperty(data.properties[newIndex]);
  }; */

  /* useEffect(() => {
    const interval = setInterval(() => {
      console.log("Sanity Check");
      nextProperty();
    }, 4000);
    return () => clearInterval(interval);
  }); */

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
