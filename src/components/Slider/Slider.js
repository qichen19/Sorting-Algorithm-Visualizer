import React from 'react';
import ReactSlider from "react-slider";
import './Slider.css';


const Slider = (props) => {

  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      defaultValue = "50"
      renderThumb={(props, state) => <div {...props}></div>}
      onChange={(value) => {props.mutateSpeed(value)}}
    />
  );
}
export default Slider;


