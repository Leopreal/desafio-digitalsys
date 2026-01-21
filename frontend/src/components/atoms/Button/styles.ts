import styled from "styled-components";

interface StyledButtonProps {
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  /* Reset */
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: all 0.2s ease;
  outline: none;

  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;

  background-color: ${(props) => {
    if (props.disabled) return "#4b5563";
    return props.variant === "secondary" ? "#1a1f3a" : "#6366f1";
  }};

  color: ${(props) => (props.disabled ? "#9ca3af" : "#ffffff")};

  border: ${(props) =>
    props.variant === "secondary" ? "2px solid #374151" : "none"};

  &:hover {
    background-color: ${(props) => {
      if (props.disabled) return "#4b5563";
      return props.variant === "secondary" ? "#2d3548" : "#4f46e5";
    }};
    transform: ${(props) => (props.disabled ? "none" : "translateY(-1px)")};
    box-shadow: ${(props) =>
      props.disabled ? "none" : "0 4px 12px rgba(99, 102, 241, 0.4)"};
  }

  &:active {
    transform: ${(props) => (props.disabled ? "none" : "translateY(0)")};
  }

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.6" : "1")};
`;
