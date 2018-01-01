import React from 'react';
import PropTypes from 'prop-types';

const TimeSlipItem = ({language, description}) => {
  const listStyle = {
    'listStyle': 'none',
    'margin': '10px 0',
    'padding': '4px',
    'border': '1px dashed white',
  }
  const h2Style = {'paddingRight': '10px'}
  return (
    <li style={listStyle}>
      <h2 style={h2Style}>{language}</h2>
      <p>{description}</p>
    </li>
  )
}

TimeSlipItem.propTypes = {
  language: PropTypes.string,
  description: PropTypes.string
}

export default TimeSlipItem;
