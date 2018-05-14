import React from "react";
import ReactDOM from "react-dom";
import Sheet from "./Sheet";

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
var thisIssue = new Issue("Imdata", "C7700567", "this message", "test User");
var issuesData = [];
var count = -1;

const imageStyle = {
    float: 'left',
    margin: '8px',
  };

  function fillResponses(issue) 
  {
        ReactDOM.findDOMNode(Sheet.date).innerHtml = String(issue.date);
        Sheet.employee.innerHtml = String(issue.user);
        Sheet.team.innerHtml = issue.teamResponsible;
        Sheet.machineNum.innerHtml = issue.machine;
        Sheet.image.src = issue.data;
        Sheet.description.innerHtml = issue.message;
        Sheet.numberFound.innerHtml = issue.otherMachinesFound;
        Sheet.numberNotFound.innerHtml = issue.otherMachinesNotFound;
  }

export default class Title extends React.Component {
    fillResponses(issue) 
  {
    ReactDOM.findDOMNode(Sheet.date).innerHtml = String(issue.date);
        Sheet.ref.employee = issue.user;
        Sheet.ref.team = issue.teamResponsible;
        Sheet.ref.machineNum = issue.machine;
        Sheet.ref.image.src = issue.data;
        Sheet.ref.description = issue.message;
        Sheet.ref.numberFound = issue.otherMachinesFound;
        Sheet.ref.numberNotFound = issue.otherMachinesNotFound;
  }
    fillDataSheet(event) {

        console.log("Filling data...");
        var id = parseInt(event.target.className);
        console.log(id);
        //Image.fillResponses(issuesData[id]);
        console.log(issuesData[id]);
    
    }
    

    handleSetImage(e) {
        const image = e.target.value;
        this.props.setImage(image);
      }
      handleChangeSheet(e) {
        const id = parseInt(e.target.className); 
        console.log(issuesData[id]); 
        const issue = issuesData[id];
        this.props.changeSheet({issue});
      }

  render() {
      count += 1;
      issuesData.push(this.props.image);
    return (
        <div>
        <img src={this.props.image.data} className={count} width="50" height="50" style={imageStyle} onClick={this.handleChangeSheet.bind(this)}></img>
        </div>
    );
  }
}