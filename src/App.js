import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Slide from "./components/Slider";
import styled from "styled-components";
import data from "./data/data";
import "./App.css";

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  const [inProp, setInProp] = useState(false);
  const [appearHome, setAppearHome] = useState(true);
  const [property, setProperty] = useState(data.properties[0]);

  const nextProperty = () => {
    setInProp(true);
    const newIndex = property.index + 1;
    setProperty(data.properties[newIndex]);
  };

  const prevProperty = () => {
    const newIndex = property.index - 1;
    setProperty(data.properties[newIndex]);
  };

  /* useEffect(() => {
    const interval = setInterval(() => {
      console.log("Sanity Check");
      nextProperty();
    }, 4000);
    return () => clearInterval(interval);
  }); */

  return (
    <div className="App">
      <CSSTransition in={inProp} appear={true} timeout={500} classNames="fade">
        <Slide property={property} />
      </CSSTransition>
      <ButtonsDiv className="buttons">
        <button onClick={() => this.toggleAppear()}>
          Appear: {`${appearHome}`}
        </button>
        <button
          onClick={() => nextProperty()}
          disabled={property.index === data.properties.length - 1}
        >
          Next
        </button>
        <button onClick={() => prevProperty()} disabled={property.index === 0}>
          Prev
        </button>
      </ButtonsDiv>
    </div>
  );
}

export default App;
