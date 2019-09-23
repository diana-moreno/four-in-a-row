import React from 'react';

const Piece = ({X, Y, color}) => {
  return(
    <div className={'box box-position-' + X + '-' + Y + ' ' + color}>
    </div>
  )
}

export default Piece;