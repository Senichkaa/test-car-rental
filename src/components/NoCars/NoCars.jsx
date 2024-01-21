import React from 'react';
import { MainContainer } from 'common/MainContainer';
import audi from '../../assets/audi.png';
import {
  NoCarsSection,
  TextCont,
  TextSpan,
  Text,
  CarContainer,
} from './NoCars.styled';

function NoCars() {
  return (
    <NoCarsSection>
      <MainContainer>
        <TextCont>
          <Text>
            There is no cars here. Press on <TextSpan>heart</TextSpan> button to
            add here some favorites
          </Text>
        </TextCont>
        <CarContainer>
          <img src={audi} alt="audi" width={1100} />
        </CarContainer>
      </MainContainer>
    </NoCarsSection>
  );
}

export default NoCars;
