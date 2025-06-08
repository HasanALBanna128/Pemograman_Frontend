import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Card = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, #1c1c1c, #2e2e2e);
  color: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.8s ease-in;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 35px rgba(245, 166, 35, 0.5);
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 4px solid #f5a623;
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.5rem 0;
  color: #f5a623;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
`;

export const Date = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 0.8rem;
`;
