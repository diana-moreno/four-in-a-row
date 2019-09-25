import React from 'react';
import { string } from 'prop-types';

const Piece = ({X, Y, color}) =>
  <div className={`box box-position-${X}-${Y} ${color}`}></div>

Piece.propTypes = {
  X: string.isRequired,
  Y: string.isRequired,
  color: string.isRequired,
}

export default Piece;