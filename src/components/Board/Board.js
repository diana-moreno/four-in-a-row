import React, { Component } from 'react';
import './Board.css';
import Piece from '../Piece/Piece';

class Board extends Component {
  state = {}

  // cuando el usuario hace click en cualquier celda, esta función se redirige a la función pasada por propiedades 'getLastEmptyPosition', y le pasa el valor de la columna a la que pertenece esa celda seleccionada.
  userChoosesColumn = () => this.props.playGame(this.props.Y)

  // se renderiza el tablero completo indicando unas clases que están vinculadas a una posición y un estilo en CSS.
  render() {
    return(
      <div>
        <Piece
          X = {this.props.X}
          Y = {this.props.Y}
          color = {this.props.color}
        />
        <div onClick={this.userChoosesColumn} className={'box box-position-' + this.props.X + '-' + this.props.Y + ' ' + 'column-' + this.props.Y}>
        </div>
      </div>
    )
  }
}

export default Board;