import { variables } from 'common/Variables';
import styled from 'styled-components';

export const NoCarsSection = styled.section`
  height: 720px;
  padding-bottom: 100px;
`;

export const TextCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 30px;
  letter-spacing: 0.55px;
  line-height: 1.35;
  color: ${variables.basicBlack};
`;

export const TextSpan = styled.span`
  color: ${variables.basicBlue};
`;

export const CarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
