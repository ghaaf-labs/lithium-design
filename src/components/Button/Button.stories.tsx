import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
  .add('Default', () => <Button>Button</Button>)
  .add('Active', () => <Button>Button</Button>)
  .add('Disabled', () => <Button disabled>Button</Button>);
