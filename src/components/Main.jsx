import React, { useState, useEffect } from "react";
import circles from "../circles.svg";
import smCircles from "../circles-small.svg";
import styled from "styled-components";

const StyledSection = styled.section`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 100px;
    font-size: 50px;
    color: #ae5fce;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Main = props => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  if (width > 768) {
    return (
      <StyledSection className="landing">
        <img src={circles} alt="dots" className="circles" />
        <h1>Dots</h1>
      </StyledSection>
    );
  }

  return (
    <StyledSection className="landing">
      <img src={smCircles} alt="dots" className="small-circles" />
      <h1>Dots</h1>
    </StyledSection>
  );
};

export default Main;
