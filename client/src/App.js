
import React from 'react';

import Footer from "./js/components/Footer";
import Header from "./js/components/Header";
import Image from "./js/components/Image";
import Machine from "./js/components/Machine";
import Navbar from "./js/components/Navbar";
import MachineList from "./js/components/MachineList";
import Sheet from "./js/components/Sheet";

function Mac(name)
{
    this.name = name;
    this.issues = [];
}
function Issue(data, machine, message, user) {
  this.id = "";
    this.data = data;
    this.machine = machine;
    this.message = message;
    this.user = user;
    this.date = "";
    this.teamResponsible = 0;
    this.addToPdi = false;
    this.otherMachinesFound = "";
    this.otherMachinesNotFound = "";
    this.saved = true;
}
var findingMachine = false;
var resolve = false;
var newissue = new Issue("https://www.resolutiongallery.com/wp-content/themes/trend/assets/img/empty/424x500.png", "CXX00XXX", "", "");
var newissue2 = new Issue("Imdata", "C7700132", "new mess", "user 2");
var myIssues = new Array(
  new Issue('https://www.w3schools.com/w3images/lights.jpg', "C7700477", "Test issue number 1", "Lauren"),
  new Issue('https://www.w3schools.com/w3images/lights.jpg', "C7700934", "Test issue number 1", "Lauren"),
  new Issue('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarUnNNDgYLrZFxsEpgVnnXwzI3J5ffDHrSqql_TUHwxVdvAyj', "C7900483", "483 has an issue", "Test User")
);
var myMachines2 = [];
var i = 0;
var myMachines = 
[  new Mac('C7700123'),
  new Mac("C7800456"),
  new Mac("C7900789")
];
myMachines[0].issues = myIssues;
myMachines[1].issues = myIssues;
myMachines[2].issues = myIssues;

const buttonStyle = {
  //float: 'left',
  backgroundColor: '#555555',
  border: 'none',
  color: 'white',
  //display: 'block',
    textAlign: 'center',
    //padding: '0px 20px',
    textDecoration: 'none',
  fontSize: '16px',
  marginLeft: '8px',
  marginTop: '8px',
  marginBottom: '8px'
};
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
      edit: false,
      machines: [],
      loadedMachines: [],
      count: 0,
      printMode: false
    };
  }

  componentDidMount() {
    console.log("In componentDidMount");
    fetch('/users')
      .then(res => res.json())
      .then(machines => this.setState({ machines }));
    console.log(this.state.machines);
  }
  changeTitle(title) {
    this.setState({title});
  }
  handleChangePrintMode(e) {
    const modeout = !this.printMode;
    this.setPrintMode(modeout);
  }
  setPrintMode(printMode) {
    this.printMode = printMode;
    this.setState({printMode});
  }
  setEdit(editin) {
    if(!editin)
    {
      //save to db
    }
      this.edit = editin;
    this.setState({editin});
  }
  setCount(countin) {
    this.count = countin
    //this.setState({countin});
  }
  findMachine(findName)
  {
    console.log("Find Machine...");
    console.log(findName);
    if(findName === "all")
    {
      findingMachine = false;
    }
    else
    {
    findingMachine = true;
    var j = 0;
    this.loadedMachines = [];
    for(j = 0; j < this.state.machines.length; j++)
    {
        if(this.state.machines[j].name === findName)
        {
          this.loadedMachines.push(this.state.machines[j]);
        }
    }
  }
    this.setState({findName});
  }
  changeSheet(issue) {
      issue = issue.issue;
      this.issue = issue;
    this.setState({issue});
  }
  convertToMacs(jsonArr)
  {
    this.loadedMachines = [];
      for(i = 0; i < jsonArr.length; i++)
      {
          var newMac = new Mac(jsonArr[i].name);
          //console.log(jsonArr[i].name);
          newMac.issues = jsonArr[i].issues;
          //console.log(newMac.name);
          this.loadedMachines.push(newMac);
          console.log(this.loadedMachines[i].name);
      }
      return this.loadedMachines;
      //myMachines= myMachines2;
  }
  componentDidMount() {
    console.log("In componentDidMount");
    fetch('/users')
      .then(res => res.json())
      .then(machines => this.setState({ machines }));
    console.log(this.state.machines);
  }
  render() {
    if(!findingMachine)
    {
      this.convertToMacs(this.state.machines);
    }
    else
    {
      //findingMachine = false;
    }
    if(this.state.machines[0] == undefined)
    {
      console.log("Machines NULL")
      return(
        <div>
          <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
          <Navbar setEdit={this.setEdit.bind(this)} edit={this.edit}/>
        </div>
      )
    }
    else
    {
      if(this.issue == undefined)
      {
          this.issue = newissue;
      }
      console.log(this.state.machines[0].name);
     
    if(this.printMode)
    {
      return(
        <div>
          <button style={buttonStyle} onClick={this.handleChangePrintMode.bind(this)}>Back</button>
          <Sheet changeSheet={this.changeSheet.bind(this)} issue={this.issue} edit={this.edit}/>
        </div>
      );
    }
    else
    {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Navbar setEdit={this.setEdit.bind(this)} edit={this.edit} printMode={this.printMode} setPrintMode={this.setPrintMode.bind(this)} findMachine={this.findMachine.bind(this)}/>
        <div style={columnStyle}>
            <div style={columnAStyle}>
            <MachineList changeSheet={this.changeSheet.bind(this)} setCount={this.setCount.bind(this)} machines={/*this.state.machines*/this.loadedMachines}/>
            </div>
            <div style={columnBStyle}>
            <Sheet changeSheet={this.changeSheet.bind(this)} issue={this.issue} edit={this.edit}/>
            </div>
        </div>
        <Footer count={this.state.count}/>
        
      </div>
      
    );
  }
  }
  }
//}
}

//export default Layout;

