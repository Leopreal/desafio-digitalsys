import React from "react";
import { Label } from "../../atoms/Label/index";
import { Input } from "../../atoms/Input/index";
import { Container } from "./styles";

export interface FormFieldProps {
  label: string;
  placeholder?: string;
  type?: "text" | "number";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};
