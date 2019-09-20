import React, { Component, Fragment } from 'react';
import './App.css';
import Board from './components/Board/Board'

class App extends Component {
  state = {
      boardGame:
  [[null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, 'rojo', null, 'azul', null]],

  //Array(6).fill().map(()=>Array(7).fill(null))
    tab: 'red',
    player: 'player1'
  }

  // encuentra todas las posiciones vacías en la matriz
  getAllEmptyPositions() {
    let emptyPositions = [];
    this.state.boardGame.forEach((row, indexRow) => {
      row.forEach((elem, indexElem) => {
        if(!elem)
          emptyPositions.push({x: indexRow, y: indexElem})
      })
    })
    //console.log(emptyPositions)
    return emptyPositions;
  }

  // encuentra la última posición vacía en la matriz según la columna que es pasada como parámetro
  getLastEmptyPosition= (column) => {
    let allEmptyPositions = this.getAllEmptyPositions();
    let lastEmptyPosition = allEmptyPositions
                              .filter(elem => elem.y === column)
                              .sort((a, b) => b.x - a.x)[0]
    console.log(column, lastEmptyPosition)
    return lastEmptyPosition;
  }
  render() {
    return (
      <Fragment>
        <div className="boardGame-container">
          {this.state.boardGame.map((row, rowIndex) => (
            row.map((cell, cellIndex) => (
              <Board
                X = {rowIndex}
                Y = {cellIndex}
                tab = {cell}
                getLastEmptyPosition = {this.getLastEmptyPosition}
              />
            ))
          ))}
        </div>
      </Fragment>
    );
  }
}

export default App;
