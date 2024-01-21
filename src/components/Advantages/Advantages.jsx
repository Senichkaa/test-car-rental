import React from 'react';
import { MainContainer } from 'common/MainContainer';
import bmw from '../../assets/bmw-akrapovic.png';
import {
  AdvantagesSection,
  TextWrapper,
  AdvTitle,
  AdvText,
  AdvSpan,
  AdvCar,
} from './Advantages.styled';

function Advantages() {
  return (
    <AdvantagesSection>
      <MainContainer>
        <TextWrapper>
          <AdvTitle>We're strive to be better for you</AdvTitle>
          <AdvText>
            Now, getting whip for nice ride around town is not expensive&nbsp;
            <AdvSpan>anymore</AdvSpan>. <br /> With us, you can easily get a car
            for your enjoyment.
          </AdvText>
        </TextWrapper>
        <AdvCar>
          <img src={bmw} alt="bmw" width={1000} />
        </AdvCar>
      </MainContainer>
    </AdvantagesSection>
  );
}

export default Advantages;
