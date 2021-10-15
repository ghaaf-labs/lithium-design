export interface ButtonProps {
    children?: string | string[];
    disabled: boolean;
    loading: boolean;
    outline?: boolean;
    fullWidth?: boolean;
    plain?: boolean;
    size?: 'slim' | 'medium' | 'large';
}
export declare function Button({ children, disabled, loading, outline, fullWidth, plain, size, }: ButtonProps): JSX.Element;
