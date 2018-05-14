import React from "react";
import Machine from "./Machine";


var count = 0;
var list = [];
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
var myIssues = new Array(
    new Issue('https://www.w3schools.com/w3images/lights.jpg', "C7700477", "Test issue number 1", "Lauren"),
    new Issue('https://www.w3schools.com/w3images/lights.jpg', "C7700934", "Test issue number 1", "Lauren"),
    new Issue('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarUnNNDgYLrZFxsEpgVnnXwzI3J5ffDHrSqql_TUHwxVdvAyj', "C7900483", "483 has an issue", "Test User")
);
var myMachines = new Array(
    new Mac('C7700123'),
    new Mac("C7800456"),
    new Mac("C7900789")
);
myMachines[0].issues = myIssues;
myMachines[1].issues = myIssues;
myMachines[2].issues = myIssues;



var i = 0;
var container = React.createElement('div', {});;

export default class MachineList extends React.Component {
    constructor() {
        super();
        this.state = {
          macName: "MachineName",
          images: [],
          mac: new Mac('C8800123')
        };
      }

    changeMacName(macName) {
        this.setState({macName});
      }

    setImages(images) {
        this.setState({images});
      }
      setMachine(mac) {
        this.setState({mac});
      }
      handleChangeSheet(e) {
        const issue = e.issue;
        this.props.changeSheet({issue});
      }
      convertToMac(jsonObject)
      {
        var newMac = new Mac(jsonObject.name);
          newMac.issues = jsonObject.issues;
          return newMac;
      }

      handleSetCount()
      {
        this.props.setCount({count});
      }
     setContainer()
     {
         count = 0;
         list = [];
        for(i = 0; i < this.props.machines.length; i++)
        {
            if(this.props.machines[i].issues.length != 0)
            {
                list.push(React.createElement(Machine, {changeMacName: 'this.changeMacName.bind(this)', setMachine: 'this.setMachine.bind(this)', macName: this.props.machines[i].name, changeSheet: this.handleChangeSheet.bind(this), mac: this.props.machines[i]}));
                count++;
            }
        }
        container = React.createElement('div', {}, list);
     }

  render() {
    this.setContainer();
    //this.handleSetCount();
    return (
        container
    );
  }
}