//import react into the bundle
import ReactDOM from "react-dom";
import React, { useState } from 'react';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState('red');

  const handleLightClick = (color) => {
    setActiveLight(color);
  };

  const handleRandomColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setActiveLight(randomColor);
  };

  return (
    <div className="traffic-light">
      <div
        className={`light red ${activeLight === 'red' ? 'active' : ''}`}
        onClick={() => handleLightClick('red')}></div>
      <div
        className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
        onClick={() => handleLightClick('yellow')}></div>
      <div
        className={`light green ${activeLight === 'green' ? 'active' : ''}`}
        onClick={() => handleLightClick('green')}></div>
      <button onClick={handleRandomColor}>Cambiar al Azar</button>
    </div>
  );
};

export default TrafficLight;

ReactDOM.render(<Home />, document.querySelector("#app"));
