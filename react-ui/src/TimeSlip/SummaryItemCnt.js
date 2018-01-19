import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { media } from '../style-utils';
import formatTime from '../time-utils';

const fadeIn = keyframes`
  from {opacity: 0.1}
  to {opacity: 1}
`;

const Heading = styled.div`
  display: inline-block;
  margin: .50rem 0 .50rem 1.5rem;
  font-size: .8rem;
  color: ${props => props.theme.dark};
  letter-spacing: 0.15rem;
  animation: ${fadeIn} 0.5s linear;
`;

const Items = styled.ul`
  display: block;
  margin: 3rem 0;
  animation: ${fadeIn} .5s ease;
`;

const Time = styled.span`
  font-size: .5rem;
  padding-left: 1.2rem;
`;

const ItemSummary = props => {
  let totalActiveTime = 0;
  let totalArchivedTime = 0;
  props.timeSlips.forEach(v => {
    if (v.completed) totalActiveTime += v.total_time;
    else totalArchivedTime += v.total_time;
  });
  return <Items>
    <Heading>
      { props.archive === 'true' ? 'Active' : 'Archived' }
    </Heading>
    <Time>
      { props.archive === 'false' ? 
        'total : ' + formatTime.hours(totalActiveTime) :
        'total : ' + formatTime.hours(totalArchivedTime)
      }
    </Time>
    {props.children}
  </Items>
}

export default ItemSummary;
