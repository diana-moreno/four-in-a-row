import React from 'react';
import { String } from 'prop-types';

const Piece = ({ X, Y, color }) =>
  <div className={`box box-position-${X}-${Y} ${color}`}></div>

Piece.propTypes = {
  X: String,
  Y: String,
  color: String,
}
export default Piece;