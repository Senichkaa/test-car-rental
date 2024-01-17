import styled from 'styled-components';
import hero from '../../assets/amg-gt.png';
import { variables } from 'common/Variables';

export const HeroSection = styled.section`
  padding: 100px 0;
  height: 680px;
  background-image: url(${hero});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const TextSpan = styled.span`
  color: ${variables.basicBlue};
`;

export const TextWrapper = styled.div`
  margin-left: auto;
  margin-top: 25px;
  width: 450px;
`;

export const HeroTitle = styled.h1`
  font-size: 36px;
  letter-spacing: 1.25px;
  line-height: 1.1;
  margin-bottom: 24px;
  color: ${variables.basicBlack};
  font-weight: 700;
`;

export const HeroText = styled.p`
  font-size: 22px;
  margin-bottom: 24px;
  line-height: 1.15;
  letter-spacing: 1.5px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeroButton = styled.button`
  margin-top: 30px;
  padding: 20px 35px;
  border-radius: 12px;
  background-color: ${variables.basicBlue};
  color: #fff;
  font-size: 20px;
  letter-spacing: 1.25px;
  transition: background-color 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${variables.hoverBlue};
  }
`;
