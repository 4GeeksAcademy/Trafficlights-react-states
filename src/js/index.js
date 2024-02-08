//import react into the bundle
import ReactDOM from "react-dom";
import React, { useState } from 'react';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState(null);
  
    const handleClick = (color) => {
      setActiveLight(color);
    };
  
    return (
        <><div className="cable"></div>
        <div className="traffic-light">
            <div
                className={`light red ${activeLight === 'red' ? 'active' : ''}`}
                onClick={() => handleClick('red')}
            ></div>
            <div
                className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
                onClick={() => handleClick('yellow')}
            ></div>
            <div
                className={`light green ${activeLight === 'green' ? 'active' : ''}`}
                onClick={() => handleClick('green')}
            ></div>
        </div></>
    );
  };
  

export default TrafficLight;


ReactDOM.render(<Home />, document.querySelector("#app"));
