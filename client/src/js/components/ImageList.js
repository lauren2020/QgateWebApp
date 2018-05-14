import React from "react";
import Image from "./Image";

const imageStyle = {
    float: 'left',
    backgroundColor: '#FFFFFF',
  };

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

var list = [];
//var images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarUnNNDgYLrZFxsEpgVnnXwzI3J5ffDHrSqql_TUHwxVdvAyj', 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'];

var imagesa = new Array(
    new Issue('http://images.all-free-download.com/images/graphiclarge/beautiful_natural_scenic_03_hd_picture_166230.jpg', "C7700477", "Test issue number 1", "Lauren"),
    new Issue('https://www.w3schools.com/bootstrap4/paris.jpg', "C7700934", "Test issue number 1", "Lauren"),
    new Issue('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarUnNNDgYLrZFxsEpgVnnXwzI3J5ffDHrSqql_TUHwxVdvAyj', "C7900483", "483 has an issue", "Test User")
);

var i = 0;
var container = React.createElement('div', {}, list);
function loadImages(images)
      {
          console.log('loadingImages');
          list = [];
        for(i = 0; i < images.length; i++)
        {
            list.push(React.createElement(Image, {setImage: 'this.setImage.bind(this)', image: images[i]}));
        }
        container = React.createElement('div', {}, list);
      }

      //loadImages(imagesa);


export default class Title extends React.Component {
    constructor() {
        super();
        this.state = {
          images: []
        };
      }

    setImage(images) {
        this.setState({images});
      }

      handleSetImages(e) {
        const images = e.target.value;
        this.props.setImages(images);
        this.loadImages(images);
      }
      handleChangeSheet(e) {
        const issue = e.issue;
        this.props.changeSheet({issue});
      }

      loadImages(images)
      {
          console.log('loadingImages');
          list = [];
        for(i = 0; i < images.length; i++)
        {
            list.push(React.createElement(Image, {setImage: 'this.setImage.bind(this)', image: images[i], changeSheet: this.handleChangeSheet.bind(this), issue: imagesa[0]}));
        }
        container = React.createElement('div', {}, list);
      }


  render() {

    this.loadImages(this.props.images);
    return (
        container
    );
  }
}