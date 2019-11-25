import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import uuid from "react-uuid";
import IMG from "./IMG";

const SlidesDiv = styled.div`
  border: 2px solid red;
  overflow: hidden;
  width: 1200px;
  height: 400px;
  margin: 20px auto;
  position: relative;
`;

/* const InnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;

  ${({ index }) => {
    console.log(index);
    if (index === 0) return `transform: translate3d(${index * -1200}px, 0, 0)`;
    if (index === 1) return `transform: translate3d(${index * -1200}px, 0, 0)`;
    if (index === 2) return `transform: translate3d(${index * -1200}px, 0, 0)`;
    if (index === 3) return `transform: translate3d(${index * -1200}px, 0, 0)`;
  }}
`; */

const InnerDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
`;

class Slide extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      appearHome: true,
      property: data.properties[0]
    };
  } */

  /* componentDidMount() {
    let index = 0;
    setInterval(() => {
      index += 1;
      this.setState({ index: index });
      if (index === 4) {
        index = 0;
        this.setState({ index: index });
      }
    }, 4000);
  } */

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
