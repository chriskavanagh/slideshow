import React, { Component } from "react";
import styled from "styled-components";
import bee from "../images/bee-1200-400.jpg";
import beetle from "../images/beetle-1200-400.jpg";
import dandy from "../images/dandelion-1200-400.jpg";
import lady from "../images/ladybug-1200-400.jpg";

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
    this.img1 = React.createRef();
    this.img2 = React.createRef();
    this.img3 = React.createRef();
    this.img4 = React.createRef();
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
          <img
            ref={this.img1}
            src={bee}
            width={1200}
            height={400}
            alt="beatle"
          />
          <img
            ref={this.img2}
            src={beetle}
            width={1200}
            height={400}
            alt="beatle"
          />
          <img
            ref={this.img3}
            src={dandy}
            width={1200}
            height={400}
            alt="dandy"
          />
          <img
            ref={this.image4}
            src={lady}
            width={1200}
            height={400}
            alt="lady"
          />
        </InnerDiv>
      </SlidesDiv>
    );
  }
}

export default Slide;
