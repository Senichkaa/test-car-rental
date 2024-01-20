import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import sprite from '../../assets/sprite.svg';
import {
  BackdropContainer,
  MainModalWrapper,
  ContentContainer,
  CloseButton,
  CarImage,
  DescriptionWrapper,
  DescriptionWrap,
  Article,
  AccessoriesContainer,
  AccessoriesTitle,
  AccessoriesList,
  RentalConditionsContainer,
  RentTitle,
  RentInformation,
  Information,
  InformationSpan,
  RentalButton,
  IconSvg,
  FullDescription,
} from './CarModal.styled';
import {
  CardTitle,
  DescriptionPart,
  TextSpan,
} from 'components/Cars/CarCard/CarCard.styled';

const rootModal = document.querySelector('#modal-root');

const toggleOverflow = toggle => {
  if (toggle) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

const CarModal = ({ car, onClose }) => {
  const {
    id,
    make,
    model,
    year,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = car;

  useEffect(() => {
    toggleOverflow(true);
    const keyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', keyDown);
    return () => {
      toggleOverflow(false);
      window.removeEventListener('keydown', keyDown);
    };
  }, [onClose]);

  const overlay = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const addressChunks = address.split(', ');
  const town = addressChunks[1];
  const country = addressChunks[2];

  const allRentalConditions = rentalConditions.split('\n', 3);
  const firstElement = allRentalConditions[0];

  const match = firstElement.match(/\d+/);
  const number = parseInt(match[0], 10);

  return createPortal(
    <BackdropContainer className="shown" onClick={overlay}>
      <MainModalWrapper className="shown">
        <ContentContainer>
          <CloseButton type="button" onClick={onClose}>
            <IconSvg width={24} height={24}>
              <use href={`${sprite}#icon-close`} />
            </IconSvg>
          </CloseButton>
          <CarImage src={img} alt="car" />
          <DescriptionWrapper>
            <CardTitle>
              <div>
                {make} &nbsp;
                <TextSpan>{model}</TextSpan>, {year}
              </div>
            </CardTitle>
            <DescriptionWrap>
              <DescriptionPart>{town}</DescriptionPart>
              <DescriptionPart>{country}</DescriptionPart>
              <DescriptionPart>Id: {id}</DescriptionPart>
              <DescriptionPart>Year: {year}</DescriptionPart>
              <DescriptionPart>Type: {type}</DescriptionPart>
              <DescriptionPart>
                Fuel Consumption: {fuelConsumption}
              </DescriptionPart>
              <DescriptionPart>Engine size: {engineSize}</DescriptionPart>
            </DescriptionWrap>
            <Article>{description}</Article>
            <AccessoriesContainer>
              <AccessoriesTitle>
                Accessories and Functionalities:
              </AccessoriesTitle>
              <AccessoriesList>
                {accessories.map((item, index) => (
                  <FullDescription key={index}>{item}</FullDescription>
                ))}
                {functionalities.map((item, index) => (
                  <FullDescription key={index}>{item}</FullDescription>
                ))}
              </AccessoriesList>
            </AccessoriesContainer>
            <RentalConditionsContainer>
              <RentTitle>Rental Conditions:</RentTitle>
              <RentInformation>
                <Information>
                  Minimum age: <InformationSpan>{number}</InformationSpan>
                </Information>
                <Information>{allRentalConditions[1]}</Information>
                <Information>{allRentalConditions[2]}</Information>
                <Information>
                  Mileage:
                  <InformationSpan>
                    {mileage.toLocaleString('en')}
                  </InformationSpan>
                </Information>
                <Information>Price: {rentalPrice}</Information>
              </RentInformation>
            </RentalConditionsContainer>
            <RentalButton href="tel:380730000000">Rental Car</RentalButton>
          </DescriptionWrapper>
        </ContentContainer>
      </MainModalWrapper>
    </BackdropContainer>,
    rootModal
  );
};

export default CarModal;
