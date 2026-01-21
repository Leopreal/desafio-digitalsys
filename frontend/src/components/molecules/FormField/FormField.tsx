import React from "react";
import { Label } from "../../atoms/Label/index";
import { Input } from "../../atoms/Input/index";
import { Container } from "./styles";

export interface FormFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: "text" | "number";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};
