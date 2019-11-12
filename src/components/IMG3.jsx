import React, { Component } from "react";
import dandy from "../images/dandelion-1200-400.jpg";

class IMG3 extends Component {
  constructor(props) {
    super(props);
    this.img3 = React.createRef();
  }
  render() {
    return (
      <img
        ref={this.img3}
        src={beetle}
        width={1200}
        height={400}
        alt="beatle"
      />
    );
  }
}

export default IMG3;
