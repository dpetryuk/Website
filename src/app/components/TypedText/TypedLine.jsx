/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

const TypedLine = ({
  animationSpeed,
  background,
  textColor,
  text,
  cursorColor,
  cursor,
}) => {
  return <Typist cursor={cursor}>{text}</Typist>;
};

TypedLine.defaultProps = {
  animationSpeed: 2,
  background: 'transparent',
  textColor: 'black',
  cursorColor: 'orange',
  text: 'Hello!',
  cursor: {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 1000,
  },
};

TypedLine.propTypes = {
  animationSpeed: PropTypes.number,
  background: PropTypes.string,
  textColor: PropTypes.string,
  cursorColor: PropTypes.string,
  text: PropTypes.string,
  cursor: PropTypes.shape({
    show: PropTypes.bool,
    blink: PropTypes.bool,
    element: PropTypes.string,
    hideWhenDone: PropTypes.bool,
    hideWhenDoneDelay: PropTypes.number,
  }),
};
export default TypedLine;
