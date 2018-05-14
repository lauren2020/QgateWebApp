import React from "react";
import MachineList from "./MachineList";

const buttonStyle = {
  float: 'left',
  backgroundColor: '#555555',
  border: 'none',
  color: 'white',
  display: 'block',
    textAlign: 'center',
    padding: '0px 20px',
    textDecoration: 'none',
  fontSize: '16px',
  marginLeft: '8px'
};
const navbarStyle = {
    flex: '30%',
    backgroundColor: '#333',
    padding: '20px'
  };
  const rightStyle = {
    float: 'right',
    display: 'block',
    marginRight: '8px',
    textAlign: 'center',
    padding: '0px 20px',
    textDecoration: 'none'
  };
  const rightButtonStyle = {
    float: 'right',
    display: 'block',
    fontSize: '16px',
    backgroundColor: '#555555',
  border: 'none',
  color: 'white',
    textAlign: 'center',
    padding: '0px 20px',
    textDecoration: 'none',
    marginRight: '8px'
  };
  const leftStyle = {
    float: 'left',
    display: 'block',
    textAlign: 'center',
    padding: '0px 20px',
    textDecoration: 'none'
  };

export default class Navbar extends React.Component {

    constructor() {
        super();
        // create a ref to store the textInput DOM element
        this.state = {
            searchValue: "MachineId eg('C7700123')"
          };
      }
    handleChange(e) {
        const editout = !this.props.edit;
        this.props.setEdit(editout);
      }
      handleFindMac(e) {
        console.log(this.searchValue);
        this.props.findMachine(this.searchValue);
      }
      handleShowAll(e) {
        this.props.findMachine("all");
      }
      handleBoxChange(e) {
        const intext = e.target.value;
        this.searchValue = intext;
        this.setState({intext});
      }
      handleChangePrintMode(e) {
        const modeout = !this.props.printMode;
        this.props.setPrintMode(modeout);
      }
      clear(e)
      {
            this.searchValue = "";
      }

  render() {
    return (
        <div style={navbarStyle}>
            <button style={buttonStyle} onClick={this.handleChangePrintMode.bind(this)}>Print Sheet</button>
            <button style={buttonStyle} onClick={this.handleChange.bind(this)}>Edit Sheet</button>
            <input value={this.searchValue} style={rightStyle} onChange={this.handleBoxChange.bind(this)} />
            <button style={rightButtonStyle} onClick={this.handleFindMac.bind(this)}>Find</button>
            <button style={rightButtonStyle} onClick={this.handleShowAll.bind(this)}>Show All</button>
        </div>
    );
  }
}