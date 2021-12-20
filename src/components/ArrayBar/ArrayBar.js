import React from 'react';
import './ArrayBar.css';

const arrayBar = (props) => {
  return (<div className='ArrayBar' style={{height: `${props.height}px`, backgroundColor: `${props.color}`}}></div>)
}

export default arrayBar;
