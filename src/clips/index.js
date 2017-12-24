import React from 'react';
import './style.css';

  function Clips(props) {
    
    return (
      <li className="cf">
        <div className="nimg">
          <img src={props.image} alt="logo" />
        </div>
        <div className="bclip">
          <h2>{props.title}</h2>
          <p>{props.summary}</p>
        </div>
      </li>
    );

  }

export default Clips;