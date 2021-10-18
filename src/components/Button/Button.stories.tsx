import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
  .add('Default', () => <Button>Button</Button>)
  .add('Disabled', () => <Button disabled>Button</Button>)
  .add('Loading', () => <Button loading>Button</Button>)
  .add('Outline', () => <Button outline>Button</Button>)
  .add('Full width', () => <Button fullWidth>Button</Button>)
  .add('Plain', () => <Button plain>Button</Button>)
  .add('Size Slim', () => <Button size="slim">Button</Button>)
  .add('Size Medium', () => <Button size="medium">Button</Button>)
  .add('Size Large', () => <Button size="large">Button</Button>)
  .add('Class name', () => <Button className={{root: "test-class-name"}}>Button</Button>)
