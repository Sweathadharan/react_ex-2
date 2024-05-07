import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
  // code here
  const images = imageData();
  const imageElements = [];
  for (let i = 0; i < images.length; i++) {
    imageElements.push(
      <img key={images[i].id} src={images[i].img} alt={images[i].id} />
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

export default App;
