
import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Image from "./Image";
import Machine from "./Machine";
import Navbar from "./Navbar";
import MachineList from "./MachineList";
import Sheet from "./Sheet";

function Issue(data, machine, message, user) {
    this.data = data;
    this.machine = machine;
    this.message = message;
    this.user = user;
    this.date = "";
    this.teamResponsible = 0;
    this.addToPdi = false;
    this.otherMachinesFound = "";
    this.otherMachinesNotFound = "";
}
var newissue = new Issue("https://www.resolutiongallery.com/wp-content/themes/trend/assets/img/empty/424x500.png", "CXX00XXX", "", "");
var newissue2 = new Issue("Imdata", "C7700132", "new mess", "user 2");


const columnStyle = {
    display: 'flex',
    padding: '10px',
    margin: '0px',
    border: '2px solid green'
  };
  const columnAStyle = {
    flex: '50%',
    height: '800px',
    overflowY: 'scroll'
  };
  const columnBStyle = {
    flex: '50%'
  };

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Q-gate",
      issue: newissue2,
      edit: false
    };
  }

  changeTitle(title) {
    this.setState({title});
  }
  setEdit(editin) {
      this.edit = editin;
    this.setState({editin});
  }
  changeSheet(issue) {
      issue = issue.issue;
      this.issue = issue;
    this.setState({issue});
  }

  render() {
      if(this.issue == undefined)
      {
          this.issue = newissue;
      }
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Navbar setEdit={this.setEdit.bind(this)} edit={this.edit}/>
        <div style={columnStyle}>
            <div style={columnAStyle}>
            <MachineList changeSheet={this.changeSheet.bind(this)} issue={newissue2}/>
            </div>
            <div style={columnBStyle}>
            <Sheet changeSheet={this.changeSheet.bind(this)} issue={this.issue} edit={this.edit}/>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

//export default Layout;