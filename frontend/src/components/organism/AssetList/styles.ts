import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
  border: 1px solid #eee;
  border-radius: 8px;
`;

export const Item = styled.li`
  padding: 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: background 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #fcfcfc;
  }
`;
