/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import '../../stylesheets/Typist.css';

const Typed = ({ children, cursor, avgTypingDelay, startDelay }) => {
  return (
    <Typist
      cursor={cursor}
      avgTypingDelay={avgTypingDelay}
      startDelay={startDelay}
    >
      {children}
    </Typist>
  );
};

Typed.defaultProps = {
  children: 'Hello. How are you?',
  avgTypingDelay: 70,
  startDelay: 25,
  cursor: {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 1000,
  },
};

Typed.propTypes = {
  children: PropTypes.node,
  avgTypingDelay: PropTypes.number,
  startDelay: PropTypes.number,
  cursor: PropTypes.shape({
    show: PropTypes.bool,
    blink: PropTypes.bool,
    element: PropTypes.string,
    hideWhenDone: PropTypes.bool,
    hideWhenDoneDelay: PropTypes.number,
  }),
};
export default Typed;
