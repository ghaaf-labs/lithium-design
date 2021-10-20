import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button';

storiesOf('ButtonGroup', module).add('Default', () => (
  <ButtonGroup>
    <Button>test</Button>
    <Button>test 2</Button>
  </ButtonGroup>
)).add('Segmented', () => (
  <ButtonGroup segmented>
    <Button>test</Button>
    <Button>test 2</Button>
  </ButtonGroup>
)).add('Full width', () => (
  <ButtonGroup fullWidth>
    <Button fullWidth>test</Button>
    <Button fullWidth>test 2</Button>
  </ButtonGroup>
));
