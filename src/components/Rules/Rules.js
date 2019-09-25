import React from 'react';
import { Link } from 'react-router-dom';
import './Rules.css';
import rulesGif from './rules.gif';

import { instructions } from '../../strings';


const Rules = () => (
  <div className='instructions-container'>
    <h2>{ instructions.title }</h2>
    <p>{ instructions.clickOnAColumn }</p>
    <p>{ instructions.goalLong }</p>
    <p>{ instructions.goalShort }</p>
    <img src={rulesGif} alt="animated rules" />
    <h2>{ instructions.playersShort }</h2>
    <p>{ instructions.playersLong }</p>
    <div className='players-icons-container'>
      <Link to='/twoPlayers'>
        <i className="fas fa-user"></i>
        <i className="fas fa-user"></i>
      </Link>
      <Link to='/singlePlayer'>
        <i className="fas fa-desktop"></i>
        <i className="fas fa-user"></i>
      </Link>
    </div>
  </div>
);

export default Rules;