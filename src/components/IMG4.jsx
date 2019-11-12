import React, { Component } from "react";
import lady from "../images/ladybug-1200-400.jpg";

class IMG4 extends Component {
  constructor(props) {
    super(props);
    this.image4 = React.createRef();
  }
  render() {
    return (
      <img
        ref={this.image4}
        src={beetle}
        width={1200}
        height={400}
        alt="beatle"
      />
    );
  }
}

export default IMG4;
