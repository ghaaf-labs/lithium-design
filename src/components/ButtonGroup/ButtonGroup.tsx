import cx from 'classnames';
import React, { Children } from 'react';
import styles from './ButtonGroup.module.scss';
import { ButtonGroupItem } from './ButtonGroupItem';

type Spacing = 'extraTight' | 'tight' | 'loose';

export interface ButtonGroupProps {
  className?: any;
  spacing?: Spacing;
  segmented?: boolean;
  fullWidth?: boolean;
  connectedTop?: boolean;
  children?: React.ReactNode;
}

export function ButtonGroup({
  children,
  segmented,
  spacing,
  fullWidth,
  className,
}: ButtonGroupProps) {
  const rootClassName = cx(
    styles.button_group,
    spacing && styles[spacing],
    className?.root && className.root
  );

  const contentClassName = cx(
    styles.button_group_content,
    segmented && styles.segmented,
    fullWidth && styles.full_width,
    className?.content && className.content
  );

  const contents = Children.toArray(children).map((child: any, index) => (
    <ButtonGroupItem className={contentClassName} button={child} key={index} />
  ));

  return (
    <div
      className={rootClassName}
      data-button-group-segmented={segmented}
      data-button-group-full-width={fullWidth}
    >
      {contents}
    </div>
  );
}
