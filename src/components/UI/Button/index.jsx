import styled from "styled-components";

const sizeMap = {
  sm: {
    fontSize: "0.8rem",
    padding: "0.2rem 0.5rem",
  },
  md: {
    fontSize: "1rem",
    padding: "0.5rem 1rem",
  },
  lg: {
    fontSize: "1.3rem",
    padding: "0.5rem 1rem",
  },
};

const Button = styled.button`
  background-color: #f5a623;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  ${({ size = "md" }) => `
    font-size: ${sizeMap[size].fontSize};
    padding: ${sizeMap[size].padding};
  `}
`;

export default Button;
