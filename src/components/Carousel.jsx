import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import uuid from "react-uuid";

const Outerdiv = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5px auto;
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

const ResponsiveImage = ({ property }) => {
  const { src, alt } = property;
  return (
    <Outerdiv style={{ width: "1400px" }}>
      <div style={{ paddingBottom: "43%" }} />
      <TransitionGroup>
        <CSSTransition key={uuid()} timeout={500} classNames="slide">
          <Img src={src} alt={alt} />
        </CSSTransition>
      </TransitionGroup>
    </Outerdiv>
  );
};

export default ResponsiveImage;
