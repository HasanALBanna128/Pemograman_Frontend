import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  background: linear-gradient(135deg, #0f0f0fef, #282828ef);
  backdrop-filter: blur(8px);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px #00000080;
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroLeft = styled.div`
  flex: 1;
  color: #fff;
`;

export const HeroRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 0;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const HeroImage = styled.img`
  max-height: 450px;
  width: auto;
  border-radius: 16px;
  border: 6px solid #f5a623;
  box-shadow: 0 10px 25px #00000099;
  transition: transform 0.3s ease;
  object-fit: cover;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    max-height: 350px;
  }
`;

export const HeroTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #f5a623;
  letter-spacing: 1px;
  text-shadow: 1px 1px 5px #000000b3;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroGenre = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #ccc;
  font-style: italic;
`;

export const HeroDescription = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ddd;
`;

export const HeroButton = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  background: linear-gradient(90deg, #f5a623, #f77f00);
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 15px #f5a62366;
  transition: background 0.3s, transform 0.2s, box-shadow 0.3s;

  &:hover {
    background: linear-gradient(90deg, #d48e19, #e56700);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px #f5a62380;
  }
`;
