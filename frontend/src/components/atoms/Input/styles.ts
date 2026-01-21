import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid #374151;

  background-color: #0a0e27;
  color: #ffffff;

  font-size: 1rem;
  transition: all 0.2s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
  }

  &:disabled {
    background-color: #1a1f3a;
    color: #6b7280;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
