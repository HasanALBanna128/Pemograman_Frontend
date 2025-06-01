import styled from "styled-components";

export const Card = styled.div`
  background-color: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Poster = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffcc00;
  margin: 5px 0 2px;
  text-align: center;
`;

export const Date = styled.p`
  font-size: 0.75rem;
  color: #bbb;
  text-align: center;
`;
