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
  className,
  plain,
  size,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const rootClassName = cx(
    styles.button,
    outline && styles.outline,
    isDisabled && styles.disabled,
    loading && styles.loading,
    plain && styles.plain,
    size && size !== DEFAULT_SIZE && styles[`size_${size}`],
    fullWidth && styles.full_width,
    className?.root && className.root,
  );

  const contentClassName = cx(
    styles.button_content,
    className?.content && className.content,
  );

  return (
    <button className={rootClassName}>
      <span className={contentClassName}>{loading ? "Loading ..." : children}</span>
    </button>
  );
}
