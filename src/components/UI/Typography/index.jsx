import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #ddd;
`;
