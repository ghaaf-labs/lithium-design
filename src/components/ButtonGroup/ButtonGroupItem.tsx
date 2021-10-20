import cx from 'classnames';
import React from 'react';
import styles from './ButtonGroup.module.scss';

export interface ButtonGroupItemProps {
  button: React.ReactElement;
  className?: any;
}

export function ButtonGroupItem({ button, className }: ButtonGroupItemProps) {
  const rootClassName = cx(styles.item, className && className);

  return <div className={rootClassName}>{button}</div>;
}
