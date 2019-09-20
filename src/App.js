import React, { Component, Fragment } from 'react';
import './App.css';
import Board from './components/Board/Board'

class App extends Component {
  state = {
    boardGame: Array(6).fill().map(()=>Array(7).fill(null)),
    color: 'red',
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
    //console.log(column, lastEmptyPosition)
    this.putATab(lastEmptyPosition)
  }
  putATab(coord) {
    let x = coord.x;
    let y = coord.y
    let boardGame = [...this.state.boardGame];
    boardGame[x][y] = this.state.color;

    this.setState({
      ...this.state,
      boardGame,
      color: this.state.color === 'red' ? 'black' : 'red',
      player: this.state.player === 'player1' ? 'player2' : 'player1'
    })
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
                color = {cell}
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
