import React from 'react';
import { StyledButton } from './styles';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
}) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      type={type}
    >
      {children}
    </StyledButton>
  );
};