import React from 'react';
import { storiesOf } from '@storybook/react';
import Typist from 'react-typist';

import Typed from './Typed';

const textArray = [
  'Hello. First Line!',
  'Second Line!',
  'Third, you guessed it, line!',
];

storiesOf('TypedLine', module)
  .add('Basic TypedLine component', () => {
    return (
      <Typed>
        <div>Hello!</div>
      </Typed>
    );
  })
  .add('Multiline Typing', () => {
    return (
      <Typed>
        This is the first Line.
        <Typist.Delay ms={1250} />
        <br />
        This is the second line!
      </Typed>
    );
  })
  .add('Multiline Typing with modular text array', () => {
    return (
      <Typed>
        {textArray.map(text => {
          return [
            <span>{text}</span>,
            <Typist.Delay ms={2000}></Typist.Delay>,
            <br />,
          ];
        })}
      </Typed>
    );
  });
