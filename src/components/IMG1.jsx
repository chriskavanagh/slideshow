import React, { Component } from "react";
import bee from "../images/bee-1200-400.jpg";

class IMG1 extends Component {
  constructor(props) {
    super(props);
    this.img1 = React.createRef();
  }
  render() {
    return (
      <img
        ref={this.img1}
        src={beetle}
        width={1200}
        height={400}
        alt="beatle"
      />
    );
  }
}

export default IMG1;
