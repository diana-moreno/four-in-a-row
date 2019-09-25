import React, { Fragment } from 'react';
import { String, func } from 'prop-types';

import Piece from '../Piece/Piece';

import './Board.css';


const Board = ({ playGame, Y, X, color }) => {

  // cuando el usuario hace click en cualquier celda, esta función se redirige a la función pasad
  // por propiedades 'getLastEmptyPosition', y le pasa el valor de la columna a la que pertenece
  // esa celda seleccionada.
  const userChoosesColumn = () => playGame(Y);

  const divClassName = `box box-position-${X}-${Y} column-${Y}`
  // se renderiza el tablero completo indicando unas clases que están vinculadas
  // a una posición y un estilo en CSS.
  return(
    <Fragment>
      <Piece X={X} Y={Y} color={color} />
      <div onClick={userChoosesColumn}  className={divClassName}>
      </div>
   </Fragment>
  )
}

Board.propTypes = {
  X: String,
  Y: String,
  color: String,
  playGame: func,
}

export default Board;