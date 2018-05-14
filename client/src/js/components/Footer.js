
import React from "react";

const footerStyle = {
    flex: '30%',
    backgroundColor: '#ddd',
    textAlign: 'center',
    padding: '10px'
  };
  const textStyle = {
    fontStyle: 'normal',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
};

export default class Footer extends React.Component {
  render() {
    return (
        <div style={footerStyle}>
      <footer style={textStyle} >{this.props.count + " Machines Currently Have Issues"}</footer>
      </div>
    );
  }
}