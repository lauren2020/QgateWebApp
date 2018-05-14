import React from "react";

import Title from "./Header/Title";
const headerStyle = {
    flex: '30%',
    backgroundColor: '#bde32e',
    //backgroundImage: 'url(/Users/laurenshultz/Documents/QgateReact/QgatMERN/client/src/images/greenlines.png)',
    backgroundRepeat: 'no-repeat',
    padding: '20px'
  };
  const textStyle = {
    fontStyle: 'normal',
    color: '#ffffff',
      fontFamily: '"Arial Black", Gadget, sans-serif'
};

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div style={headerStyle}>
        <Title title={this.props.title} />
      </div>
    );
  }
}