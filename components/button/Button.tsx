import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'progress';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
} as const;

const variantClasses = {
  default: 'bg-primary text-white hover:bg-primaryHover',
  progress: `border border-primary text-primary hover:text-white hover:bg-transparent
  before:content-[""] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:z-[-1] 
  before:bg-primary before:origin-left before:rounded-md before:transition-transform before:duration-300 before:ease-in-out before:scale-x-0 hover:before:scale-x-100`,
} as const;

const baseClasses =
  'relative overflow-hidden rounded-md font-semibold focus:outline-none transition-colors cursor-pointer';
const disabledClasses = 'disabled:opacity-50 disabled:cursor-not-allowed';

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        baseClasses,
        disabledClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
