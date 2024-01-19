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
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/catalog');
  };

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
            <HeroButton type="button" onClick={navigateHandler}>
              To the catalog
            </HeroButton>
          </ButtonWrapper>
        </TextWrapper>
      </MainContainer>
    </HeroSection>
  );
}

export default Hero;
