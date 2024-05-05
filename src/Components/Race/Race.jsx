import React, { useEffect, useState } from 'react';
import "./Race.css";
import carRed from "../../assets/car-red.json";
import carBlue from "../../assets/car-blue.json";
import carGreen from "../../assets/car-green.json";
import carYellow from "../../assets/car-yello.json";
import Lottie from 'react-lottie';

const Race = () => {
  // State variable to store rotation angle of wheels
  const [wheelRotation, setWheelRotation] = useState(20);

 const defaultOptions = {
  
    red: {
      loop: true,
  autoplay: true,
  animationData: carRed,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
    },
    blue: {
      loop: true,
  autoplay: true,
  animationData: carBlue,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
    },
    green: {
      loop: true,
  autoplay: true,
  animationData: carGreen,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
    },
    yellow: {
      loop: true,
  autoplay: true,
  animationData: carYellow,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
    },

  
  
};
 

  return (
    <div className="road-wrapper">
      <div className="line1 line">
       {/* Car body */}
       <div className="car-wrapper" id='car1'>
       <Lottie 
	    options={defaultOptions.red}
        height={400}
        width={400}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
      </div>
      </div>
      <div className="line2 line">
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
       <div className="car-wrapper" id="car2">

        <Lottie 
	    options={defaultOptions.blue}
        height={400}
        width={400}
        className="car"
        style={{
          width: '100%',
          height: '100%'
        }}
      />
      </div>
      </div>
      <div className="line3 line">
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
       <div className="car-wrapper" id="car3">

        <Lottie 
	    options={defaultOptions.green}
        height={400}
        width={400}
        className="car"
        style={{
          width: '100%',
          height: '100%'
        }}
      />
      </div>
      </div>
      <div className="line4 line">
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
       <div className="car-wrapper" id="car4">
        <p>you</p>
        <Lottie 
	    options={defaultOptions.yellow}
        height={400}
        width={400}
        className="car"
        style={{
          width: '100%',
          height: '100%'
        }}
      />
      </div>
       
      </div>
      <div className="line5 line">
        
      </div>
    </div>
  );
}

export default Race;
