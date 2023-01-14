
interface ButtonPropsInterface {
    onClick?(): void;
    children?: JSX.Element | string;
    disabled?: boolean;
    className?: string;
}

const Button = ({ children, disabled, className, onClick }: ButtonPropsInterface) => {
    return <button className={className}
        onClick={onClick} disabled={disabled}>{children}</button>
}

export default Button