import React from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Outerdiv = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5px auto;
  border-top: 10px solid lightgray;
`;

const Innerdiv = styled.div`
  padding-bottom: 43%;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  /* height: auto; or 100% */
`;

const Carousel = ({ property: { src, alt } }) => {
  //const { src, alt } = property;
  return (
    <Outerdiv style={{ width: "1400px" }}>
      <Innerdiv />
      <TransitionGroup>
        <CSSTransition key={uuid()} timeout={1500} classNames="slide">
          <Img src={src} alt={alt} />
        </CSSTransition>
      </TransitionGroup>
    </Outerdiv>
  );
};

export default Carousel;
