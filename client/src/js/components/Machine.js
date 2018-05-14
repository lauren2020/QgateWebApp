import React from "react";
import Image from "./Image";
import ImageList from "./ImageList";


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

var images = ['https://www.w3schools.com/w3images/lights.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarUnNNDgYLrZFxsEpgVnnXwzI3J5ffDHrSqql_TUHwxVdvAyj', 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'];

function Mac(name)
{
    this.name = name;
    this.issues = [];
}

const machineListStyle = {
    flex: '30%',
    backgroundColor: '#f1f1f1',
    padding: '10px'
  };
  const imageListStyle = {
    flex: '30%',
    height: '70px',
    backgroundColor: '#FFFFFF',
    //padding: '50px',
  };
  const imageListInStyle = {
    flex: '30%',
    padding: '50px',
  };
  const textStyle = {
      fontStyle: 'normal',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
  };

export default class Title extends React.Component {

    handleNameChange(e) {
        const macName = e.target.value;
        this.props.changeMacName(macName);
        console.log('Name Set');
      }
      handleSetImages(e) {
        const images = e.target.value;
        this.props.setImages(images);
      }
      handleSetMac(e) {
        const mac = e.target.value;
        this.props.setMachine(mac);
        this.loadImages(mac);
      }

      loadImages()
      {
          console.log('Loading images...');
            images = this.props.mac.issues;
      }
      handleChangeSheet(e) {
        const issue = e.issue;
        this.props.changeSheet({issue});
      }

      constructor() {
        super();
        this.state = {
          images: []
        };
      }

    setImages(images) {
        this.setState({images});
      }

  render() {
      
    return (
        <div>
        <div style={machineListStyle}>
            <p style={textStyle} /*onClick={this.handleNameChange.bind('C7700567')}*/ >{this.props.mac.name}</p>
        </div>

        <div style={imageListStyle}>
            <ImageList style={imageListInStyle} setImages={this.setImages.bind(this)} images={this.props.mac.issues} changeSheet={this.handleChangeSheet.bind(this)}/>
        </div>
        </div>
    );
  }
}