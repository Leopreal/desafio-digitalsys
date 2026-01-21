import React from "react";
import { StyledLabel } from "./styles";

export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}

export const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};
