/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { styled, keyframes } from 'styled-components';

const Type = keyframes`
 0% {
    width: 0;
  }
  99.9% {
    border-right: .15em solid ${props => props.cursorColor};
  }
  100% {
    border: none;
  }
`;

const TextAnimation = styled.div`
  p {
    color: ${props => props.textColor};
    background: ${props => props.background};
    width: 7em;
    -webkit-animation: ${Type} ${props => props.animationSpeed}s steps(40, end);
    animation: ${Type} ${props => props.animationSpeed}s steps(40, end);
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
`;

const TypedText = (
  animationSpeed,
  background,
  textColor,
  text,
  cursorColor,
) => {
  return (
    <TextAnimation
      animationSpeed={animationSpeed}
      background={background}
      textColor={textColor}
      cursorColor={cursorColor}
    >
      <p>{text}</p>
    </TextAnimation>
  );
};

TypedText.defaultProps = {
  animationSpeed: 2,
  background: 'transparent',
  textColor: 'black',
  cursorColor: 'orange',
  text: 'Hello!',
};

TypedText.propTypes = {
  animationSpeed: PropTypes.number,
  background: PropTypes.string,
  textColor: PropTypes.string,
  cursorColor: PropTypes.string,
  text: PropTypes.string,
};
export default TypedText;
