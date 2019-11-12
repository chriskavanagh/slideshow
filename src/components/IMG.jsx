import React, { Component } from "react";

class IMG extends Component {
  constructor(props) {
    super(props);
    this.img1 = React.createRef();
  }
  render() {
    return (
      <img
        ref={this.ref}
        src={this.props.src}
        width={this.props.width}
        height={this.props.height}
        alt="beatle"
      />
    );
  }
}

export default IMG;
