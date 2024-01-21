import { variables } from 'common/Variables';
import styled from 'styled-components';

export const AdvantagesSection = styled.section`
  height: 720px;
  padding: 50px 0 100px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AdvTitle = styled.h2`
  font-size: 34px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;
  letter-spacing: 0.65px;
  color: ${variables.basicBlue};
  padding-bottom: 15px;
`;

export const AdvText = styled.p`
  text-align: center;
  font-size: 24px;
  letter-spacing: 0.55px;
  line-height: 1.35;
  color: ${variables.basicBlack};
  padding-bottom: 40px;
`;

export const AdvSpan = styled.span`
  color: ${variables.basicBlue};
`;

export const AdvCar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
