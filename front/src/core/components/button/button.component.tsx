import './scss/button.styles.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'error';
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  ariaLabel,
  onClick,
  ...props
}: ButtonProps) => {
  const buttonClass = `button-${variant}`;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};
