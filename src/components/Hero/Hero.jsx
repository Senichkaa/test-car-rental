import React from 'react';
import { MainContainer } from 'common/MainContainer';
import {
  HeroSection,
  TextSpan,
  TextWrapper,
  HeroTitle,
  HeroText,
  HeroButton,
  ButtonWrapper,
} from './Hero.styled';

function Hero() {
  return (
    <HeroSection>
      <MainContainer>
        <TextWrapper>
          <HeroTitle>
            Search in large amount of cars <TextSpan>yours</TextSpan> best
            choice.
          </HeroTitle>
          <HeroText>
            Now, you can easily <TextSpan>find</TextSpan> the car you need,
            which will suit you in terms of characteristics, wallet or
            appearance. <br />
            It couldn't be simpler!
          </HeroText>
          <ButtonWrapper>
            <HeroButton type="button">To the catalog</HeroButton>
          </ButtonWrapper>
        </TextWrapper>
      </MainContainer>
    </HeroSection>
  );
}

export default Hero;
