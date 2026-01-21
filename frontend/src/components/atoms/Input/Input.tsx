import React from "react";
import { StyledInput } from "./styles";

export interface InputProps {
  id: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "number";
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
}) => {
  return (
    <StyledInput
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
    />
  );
};
