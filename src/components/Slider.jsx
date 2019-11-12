import React, { Component } from "react";
import styled from "styled-components";
import bee from "../images/bee-1200-400.jpg";
import beetle from "../images/beetle-1200-400.jpg";
import dandy from "../images/dandelion-1200-400.jpg";
import lady from "../images/ladybug-1200-400.jpg";
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
  transition: 1000ms;

  ${({ index }) => {
    console.log(index);
    if (index === 0) return `transform: translate3d(${index * -1200}px, 0, 0)`;
    if (index === 1) return `transform: translate3d(${index * -1200}px, 0, 0)`;
    if (index === 2) return `transform: translate3d(${index * -1200}px, 0, 0)`;
    if (index === 3) return `transform: translate3d(${index * -1200}px, 0, 0)`;
  }}
`;

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    let index = 0;
    setInterval(() => {
      index += 1;
      this.setState({ index: index });
      if (index === 4) {
        index = 0;
        this.setState({ index: index });
      }
    }, 2000);
  }

  render() {
    const { index } = this.state;
    return (
      <SlidesDiv>
        <InnerDiv index={index}>
          <img src={bee} width={1200} height={400} alt="beatle" />
          <img src={beetle} width={1200} height={400} alt="beatle" />
          <img src={dandy} width={1200} height={400} alt="dandy" />
          <img src={lady} width={1200} height={400} alt="lady" />
        </InnerDiv>
      </SlidesDiv>
    );
  }
}

export default Slide;
