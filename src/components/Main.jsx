import React from "react";
import circles from "../circles.svg";
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

const Main = () => {
  return (
    <StyledSection className="landing">
      <img src={circles} alt="dots" />
      <h1>Dots</h1>
    </StyledSection>
  );
};

export default Main;
