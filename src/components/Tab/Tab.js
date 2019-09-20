import React from 'react';

const Tab = ({X, Y, color}) => {
  return(
    <div className={'box box-position-' + X + '-' + Y + ' ' + color}>
    </div>
  )
}

export default Tab;