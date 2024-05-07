import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render() {
    
    const images = this.imageData();

    const imageElements = [];
    for (let i = 0; i < images.length; i++) {
      imageElements.push(
        <img key={images[i].id} src={images[i].img} alt={`Image ${images[i].id}`} />
      );
    }

    return (
      <div className="App">
        <h1>Kalvium gallary</h1>
        <div className="image-container">
          {imageElements}
        </div>
      </div>
    );
  }
}


