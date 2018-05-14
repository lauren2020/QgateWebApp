import React from "react";
import ReactDOM from "react-dom";
//import Box from "./Box";

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
    
}
var issue = new Issue("Imdata", "C7700567", "this message", "test User");
var newissue2 = new Issue("Imdata", "C7700132", "new mess", "user 2");
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
    marginLeft: '8px',
    marginTop: '8px'
  };
const lineStyle = {
    marginLeft: '8px',
    marginRight: '8px',
    marginBottom: '8px',
  };
  const labelLineStyle = {
    marginLeft: '8px',
    marginRight: '8px',
    marginBottom: '8px',
    backgroundColor: '#f1f1f1',
  };
const sheetStyle = {
    display: 'flex',
    marginTop: '-2px',
    marginLeft: '0px'
  };
const rowaStyle = {
    flex: '100%',
    display: 'grid',
    height: '100px',
    marginTop: '-2px',
    marginLeft: '0px',
    paddign: '10px',
    border: '2px solid black'
  };
  const rowa2Style = {
    flex: '100%',
    display: 'grid',
    height: '150px',
    marginTop: '-2px',
    marginLeft: '0px',
    border: '2px solid black'
  };
  const rowaHeaderStyle = {
    flex: '100%',
    display: 'flex',
    height: '100px',
    marginTop: '-2px',
    marginLeft: '0px',
    paddign: '10px',
    border: '2px solid black'
  };
  const rowHeaderStyle = {
    flex: '100%',
    display: 'flex',
    height: '150px',
    marginTop: '-2px',
    marginLeft: '0px',
  };
  const rowbStyle = {
    flex: '100%',
    display: 'flex',
    height: '200px',
    marginTop: '-2px',
    marginBottom: '-2px',
    marginLeft: '0px',
    border: '2px solid black'
  };
  const boxStyle = {
    flex: '33%',
    margin: '0px',
    border: '2px solid black'
  };

  function fillResponses(issue) 
  {
    this.date.innerHtml = String(issue.date);
    this.employee.innerHtml = String(issue.user);
    this.team.innerHtml = issue.teamResponsible;
    this.machineNum.innerHtml = issue.machine;
    this.image.src = issue.data;
    this.description.innerHtml = issue.message;
    this.numberFound.innerHtml = issue.otherMachinesFound;
    this.numberNotFound.innerHtml = issue.otherMachinesNotFound;
  }

export default class Title extends React.Component {

    constructor() {
        super();
        // create a ref to store the textInput DOM element
        this.state = {
            myref: this,
            saveStatus: false,
            saveMessage: "NOT SAVED",
          };
      }
      handleChangeSheet(e) {
        const issue = e.target.value;
        this.props.changeSheet(issue);
      }
      handleBoxChange(e) {
        const intext = e.target.value;
        const id = e.target.id;
        this.props.issue.saved = false;
        this.setSavedIndicator;
        if(id === "date")
        {
            this.props.issue.date = intext;
        }
        else if(id === "employee")
        {
            this.props.issue.employee = intext;
        }
        else if(id === "teamResponsible")
        {
            this.props.issue.teamResponsible = intext;
        }
        else if(id === "machine")
        {
            this.props.issue.machine = intext;
        }
        else if(id === "message")
        {
            this.props.issue.message = intext;
        }
        else if(id === "numberFound")
        {
            this.props.issue.numberFound = intext;
        }
        else if(id === "numberNotFound")
        {
            this.props.issue.numberNotFound = intext;
        }
        else if(id === "onPdi")
        {
            this.props.issue.onPdi = intext;
        }
        this.setState({intext});
      }
      saveToDB()
      {
          //push to database and update object
          alert("Response were saved.");
          return fetch('/users/save', {
            method: 'put',
            body: JSON.stringify(this.props.issue),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            //.then(checkStatus)
            .then(()=>console.log('updated!!!'))
            alert("Response were saved.");
      }
      setSavedIndicator()
      {
        if(this.props.issue.saved)
        {
          this.saveStatus = true;
          this.saveMessage = "RESPONSES ARE SAVED";
        }
        else{
          this.saveStatus = false;
          this.saveMessage = "SOME RESPONSES ARE NOT SAVED";
        }
      }
      changeSaveStatus(e)
      {
          const success = true;
          this.saveToDB();
          if(success)
          {
              this.props.issue.saved = true;
            this.saveStatus = true;
            this.saveMessage = "RESPONSES ARE SAVED";
          }
          else{
            this.props.issue.saved = false;
            this.saveStatus = false;
            this.saveMessage = "RESPONSES COULD NOT SAVE";
          }
          this.setState({e});
      }
      setCurrentValues()
      {
            /*this.date = this.props.issue.date;
            this.employee = this.props.issue.employee;
            this.teamResponsible = this.props.issue.teamResponsible;
            this.machine = this.props.issue.machine;
            this.message = this.props.issue.message;
            this.numberFound = this.props.issue.numberFound;
            this.numberNotFound = this.props.issue.numberNotFound;
            this.onPdi = this.props.issue.onPdi;*/
            //<p style={lineStyle}>{this.saveMessage}</p>
      }


  render() {
      this.setSavedIndicator();
      if(this.props.edit)
      {
        return (
            <div>
                <div style={rowaHeaderStyle}>
                    <div style={boxStyle}>
                        <button style={buttonStyle} onClick={this.changeSaveStatus.bind(this)}>Save</button>
                        
                    </div>
    
                    <div style={boxStyle} onClick={this.fillResponses}>
                        <h1>In-Line Machine Rework Plan</h1>
                    </div>
                </div>
    
                <div style={rowHeaderStyle}>
                    <div style={boxStyle}>
                    <div style={labelLineStyle}>
                        <p >Date: </p>
                        </div>
                        <input id='date' style={lineStyle} value={this.props.issue.date} onChange={this.handleBoxChange.bind(this)}/>
                        <p style={lineStyle}>Employee #: </p>
                        <input id='employee' style={lineStyle} value={this.props.issue.employee} onChange={this.handleBoxChange.bind(this)}/>
                    </div>
    
                    <div style={boxStyle}>
                        <p style={lineStyle}>Team Responsible: </p>
                        <input id='teamResponsible' style={lineStyle} value={this.props.issue.teamResponsible} onChange={this.handleBoxChange.bind(this)}/>
                    </div>
    
                    <div style={boxStyle}>
                        <p style={lineStyle}>Found on Machine #: </p>
                        <input id='machine' style={lineStyle} value={this.props.issue.machine} onChange={this.handleBoxChange.bind(this)}/>
                    </div>
                </div>
    
                <div style={rowbStyle}>
                    <img id='image' ref="image" src={this.props.issue.data} width="200" height="200"></img>
                </div>
    
                <div style={rowaStyle}>
                    <p style={lineStyle}>Description of error (if not already stated above): </p>
                    <input id='message' style={lineStyle} value={this.props.issue.message} onChange={this.handleBoxChange.bind(this)}/>
                </div>
    
                <div style={rowa2Style}>
                    <p style={lineStyle}>Machine numbers inspected in line found to have the error: </p>
                    <input id='numberFound' style={lineStyle} value={this.props.issue.numberFound} onChange={this.handleBoxChange.bind(this)}/>
                    <p style={lineStyle}>Machine numbers inspected in line found to NOT have the error: </p>
                    <input id='numberNotFound' style={lineStyle} value={this.props.issue.numberNotFound} onChange={this.handleBoxChange.bind(this)}/>
                </div>
    
                <div style={rowaStyle}>
                <p style={lineStyle}>Should issue be added to PDI: </p>
                <input id='onPdi' style={lineStyle} value={this.props.issue.onPdi} onChange={this.handleBoxChange.bind(this)}/>
                </div>
            </div>
        );
      }
      else
      {
    return (
        <div>
            <div style={rowaHeaderStyle}>
                <div style={boxStyle}>
                    <button style={buttonStyle} onClick={this.changeSaveStatus.bind(this)}>Save</button>
                </div>

                <div style={boxStyle} onClick={this.fillResponses}>
                    <h1>In-Line Machine Rework Plan</h1>
                </div>
            </div>

            <div style={rowHeaderStyle}>
                <div style={boxStyle}>
                    <p style={lineStyle}>Date: </p>
                    <p id='date' ref="date" style={lineStyle}>{this.props.issue.date}</p>
                    <p style={lineStyle}>Employee #: </p>
                    <p id='employee' ref="employee" style={lineStyle}>{this.props.issue.employee}</p>
                </div>

                <div style={boxStyle}>
                    <p style={lineStyle}>Team Responsible: </p>
                    <p id='team' ref="team" style={lineStyle}>{this.props.issue.teamResponsible}</p>
                </div>

                <div style={boxStyle}>
                    <p style={lineStyle}>Found on Machine #: </p>
                    <p id='machineNum' ref="machineNum" style={lineStyle}>{this.props.issue.machine}</p>
                </div>
            </div>

            <div style={rowbStyle}>
                <img id='image' ref="image" src={this.props.issue.data} width="200" height="200"></img>
            </div>

            <div style={rowaStyle}>
                <p style={lineStyle}>Description of error (if not already stated above): </p>
                <p id='description' ref="description" style={lineStyle}>{this.props.issue.message}</p>
            </div>

            <div style={rowa2Style}>
                <p style={lineStyle}>Machine numbers inspected in line found to have the error: </p>
                <p id='numberFound' ref="numberFound" style={lineStyle}>{this.props.issue.numberFound}</p>
                <p style={lineStyle}>Machine numbers inspected in line found to NOT have the error: </p>
                <p id='numberNotFound' ref="numberNotFound" style={lineStyle}>{this.props.issue.numberNotFound}</p>
            </div>

            <div style={rowaStyle}>
            <p style={lineStyle}>Should issue be added to PDI: </p>
            <p id='onPdi' ref="onPdi">{this.props.issue.onPdi}</p>
            </div>
        </div>
    );
}
  }
}