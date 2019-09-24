import React, { Component } from 'react';
import './Rules.css';

class Rules extends Component {
  state = {}

  render() {
    return(
      <div className='instructions-container'>
        <h2>INSTRUCTIONS</h2>
        <p>Click on a column to drop your piece.</p>
        <p>When you can connect four pieces vertically, horizontally or diagonally, you win.</p>
        <p>Make four in a row to win!</p>
        <h2>PLAYERS</h2>
        <p>You can play against a friend in the same Pc or you can select one player to try your luck against the computer, up to you!</p>
        <div>
          <p>1 player</p>
          <p>2 players</p>
        </div>
     </div>
    )
  }
}

export default Rules;