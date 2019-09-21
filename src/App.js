import React, { Component, Fragment } from 'react';
import './App.css';
import Board from './components/Board/Board';
/*import Tab from './components/Tab/Tab';*/

class App extends Component {
  state = {
    boardGame: Array(6).fill().map(()=>Array(7).fill(null)),
    color: 'red',
    player: 'player1',
    isWon: false
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
    if(!this.state.isWon) {
      let allEmptyPositions = this.getAllEmptyPositions();
      let lastEmptyPosition = allEmptyPositions
                                .filter(elem => elem.y === column)
                                .sort((a, b) => b.x - a.x)[0]
      //console.log(column, lastEmptyPosition)
      this.putATab(lastEmptyPosition)
      let color = this.state.color
      let horizontalMatrix = [...this.state.boardGame]
      let verticalMatrix = this.transposeMatrix()
      this.checkIfWinHorizontalVertical(color, horizontalMatrix)
      this.checkIfWinHorizontalVertical(color, verticalMatrix)
    }
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

 transposeMatrix() {
    let boardGame = [...this.state.boardGame]

    let transposedMatrix = boardGame[0].map((col, i) =>
                           boardGame.map(row => row[i]));
    return transposedMatrix;
  }

//funciona pero está mal escrito:
/*  checkIfWin(color, matrix) {
  for(let i = 0; i < matrix.length; i++) {
    if(
        (matrix[i][0] === color
      && matrix[i][0] === matrix[i][1]
      && matrix[i][1] === matrix[i][2]
      && matrix[i][2] === matrix[i][3])
      || (matrix[i][1] === color
      && matrix[i][1] === matrix[i][2]
      && matrix[i][2] === matrix[i][3]
      && matrix[i][3] === matrix[i][4])
      || (matrix[i][2] === color
      && matrix[i][2] === matrix[i][3]
      && matrix[i][3] === matrix[i][4]
      && matrix[i][4] === matrix[i][5])
      || (matrix[i][3] === color
      && matrix[i][3] === matrix[i][4]
      && matrix[i][4] === matrix[i][5]
      && matrix[i][5] === matrix[i][6])
    ) {
      console.log('linea', color)
      this.setState({
        ...this.state,
        isWon: true
      })
      }
    }
  }
*/

  checkIfWinHorizontalVertical(color, matrix) {
    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
        if(matrix[i][j] === matrix[i][j+1]
          && matrix[i][j] === matrix[i][j+2]
          && matrix[i][j] === matrix[i][j+3]
          && matrix[i][j] === color) {
          console.log('win', this.state.player, this.state.color)
          this.setState({
            ...this.state,
            isWon: true
          })
        }
      }
    }
  }
  checkIfWinDiagonal(color, matrix) {

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
        <div>
          <h2 className={this.state.color}> {this.state.player}</h2>
        </div>
      </Fragment>
    );
  }
}

export default App;
