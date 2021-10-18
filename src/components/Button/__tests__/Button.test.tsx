import React from 'react';
import { Button } from '..';
import { render } from '@testing-library/react';

describe('Button Component', () => {
  it('Button renders', () => {
    const { container } = render(<Button />);

    const node = container.querySelector('button.Button');
    expect(node!.className).toEqual('Button');
  });

  it('Button disabled renders', () => {
    const { container } = render(<Button disabled />);

    const node = container.querySelector('button.Button');
    expect(node!.className).toEqual('Button Button--disabled');
  });

  it('Button children renders', () => {
    const { container } = render(<Button>foo</Button>);

    const node = container.querySelector('button.Button');
    expect(node!.innerHTML).toEqual('foo');
  });

  it('Button extra classNames render', () => {
    const { container } = render(<Button className='foo' />);

    const node = container.querySelector('button');
    expect(node!.className).toEqual('foo');
  });
});
