import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import uuid from "react-uuid";
//import IMG from "./IMG";

const SlidesDiv = styled.div`
  border: 2px solid red;
  overflow: hidden;
  width: 1200px;
  height: 400px;
  margin: 20px auto;
  position: relative;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
`;

class Slide extends Component {
  render() {
    // const { appearHome, property } = this.state;
    return (
      <>
        <SlidesDiv>
          <InnerDiv>
            <TransitionGroup className="card-container">
              <CSSTransition key={uuid()} timeout={500} classNames="slide">
                <IMG property={this.props.property} />
              </CSSTransition>
            </TransitionGroup>
          </InnerDiv>
        </SlidesDiv>
      </>
    );
  }
}

export default Slide;
