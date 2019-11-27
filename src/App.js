import React, { useState, useEffect } from "react";
//import { CSSTransition } from "react-transition-group";
//import Transition from "./components/Transition";
import Navbar from "./components/Navbar";
//import Slide from "./components/Slider";
import Carousel from "./components/Carousel";
import styled from "styled-components";
import data from "./data/data";
import Main from "./components/Main";
import "./App.css";

/* const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
`; */

function App() {
  const [inProp, setInProp] = useState(false);
  const [property, setProperty] = useState(data.properties[0]);

  const nextProperty = () => {
    setInProp(!inProp);
    let newIndex = property.index + 1;
    if (newIndex === 4) {
      newIndex = 0;
      setProperty(data.properties[newIndex]);
    }
    setProperty(data.properties[newIndex]);
  };

  const prevProperty = () => {
    const newIndex = property.index - 1;
    setProperty(data.properties[newIndex]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Sanity Check");
      nextProperty();
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <Navbar />
      <Carousel property={property} />
      <Main />
    </div>
  );
}

export default App;
