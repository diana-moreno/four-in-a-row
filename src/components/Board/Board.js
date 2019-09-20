import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
  state = {}

// cuando el usuario hace click en cualquier celda, esta función se redirige a la función pasada por propiedades 'getLastEmptyPosition', y le pasa el valor de la columna a la que pertenece esa celda seleccionada.
  userPlays = () => this.props.getLastEmptyPosition(this.props.Y)

// se renderiza el tablero completo indicando unas clases que están vinculadas a una posición y un estilo en CSS.
  render() {
    return(
      <div onClick={this.userPlays} className={'box box-position-' + this.props.X + '-' + this.props.Y + ' ' + 'column-' + this.props.Y}>
        {/*        {this.props.X}{this.props.Y}*/}
        {this.props.tab}
      </div>
    )
  }
}

export default Board;