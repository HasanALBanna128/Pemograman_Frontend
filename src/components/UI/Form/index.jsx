import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  background-color: #333;
  color: white;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
