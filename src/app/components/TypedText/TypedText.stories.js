import React from 'react';
import { storiesOf } from '@storybook/react';

import TypedLine from './TypedLine';

storiesOf('TypedLine', module).add('Basic TypedLine component', () => {
  return <TypedLine></TypedLine>;
});
