import React, { Component } from "react";
import beetle from "../images/beetle-1200-400.jpg";

class IMG2 extends Component {
  constructor(props) {
    super(props);
    this.img2 = React.createRef();
  }
  render() {
    return (
      <img
        ref={this.img2}
        src={beetle}
        width={1200}
        height={400}
        alt="beatle"
      />
    );
  }
}

export default IMG2;
