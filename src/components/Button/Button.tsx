import cx from 'classnames';
import React from 'react';
import styles from './Button.module.scss';

const DEFAULT_SIZE = 'medium';

export interface ButtonProps {
  className?: any;
  children?: string | string[];
  disabled?: boolean;
  loading?: boolean;
  outline?: boolean;
  fullWidth?: boolean;
  plain?: boolean;
  size?: 'slim' | 'medium' | 'large';
}

export function Button({
  children,
  disabled,
  loading,
  outline,
  fullWidth,
  plain,
  size,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const className = cx(
    styles.button,
    outline && styles.outline,
    isDisabled && styles.disabled,
    loading && styles.loading,
    plain && styles.plain,
    size && size !== DEFAULT_SIZE && styles[`size-${size}`],
    fullWidth && styles.fullWidth,
  );

  return <button className={className}>{children}</button>;
}
