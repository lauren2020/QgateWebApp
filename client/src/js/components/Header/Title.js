
import React from "react";

const textStyle = {
    fontStyle: 'normal',
    color: '#373a2a',
      fontFamily: '"Arial Black", Gadget, sans-serif'
};

export default class Title extends React.Component {
  render() {
    return (
      <h1 style={textStyle}>{this.props.title}</h1>
    );
  }
}