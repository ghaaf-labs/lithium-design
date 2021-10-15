import React from 'react';
import './example.scss';
export interface ExampleProps {
    active?: boolean | undefined;
    disabled?: boolean | undefined;
    children?: any;
    className?: string;
}
export declare const Example: React.FC<ExampleProps>;
