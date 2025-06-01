import styled from "styled-components";

export const Container = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
  margin-top: 3rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);

  @media (min-width: 768px) {
    padding: 2.5rem;
    font-size: 1.1rem;
  }

  @media (min-width: 992px) {
    padding: 3rem 5rem;
    text-align: center;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: #f5a623;

  @media (min-width: 992px) {
    margin: 0 0 1rem 0; 
  }
`;

export const Author = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: #bbb;

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }
`;
