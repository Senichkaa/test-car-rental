import React from 'react';
import {
  Card,
  ImageWrapper,
  Image,
  CardTitle,
  TextSpan,
  TextWrapper,
  DescriptionPart,
  MoreButton,
} from './CarCard.styled';

function CarCard({ car }) {
  const {
    id,
    img,
    make,
    model,
    year,
    address,
    rentalPrice,
    rentalCompany,
    accessories,
  } = car;
  const fullAddress = address.split(', ');
  const town = fullAddress[1];
  const country = fullAddress[2];

  return (
    <Card>
      <ImageWrapper>
        <Image src={img} alt="car" />
      </ImageWrapper>
      <CardTitle>
        <div>
          {make} &nbsp;
          <TextSpan>{model}</TextSpan>, {year}
        </div>
        {rentalPrice}
      </CardTitle>
      <TextWrapper>
        <DescriptionPart>{town}</DescriptionPart>
        <DescriptionPart>{country}</DescriptionPart>
        <DescriptionPart>{rentalCompany}</DescriptionPart>
        <DescriptionPart>{model}</DescriptionPart>
        <DescriptionPart>{make}</DescriptionPart>
        <DescriptionPart>{id}</DescriptionPart>
        <DescriptionPart>{accessories[2]}</DescriptionPart>
      </TextWrapper>
      <MoreButton type="button">Learn more</MoreButton>
    </Card>
  );
}

export default CarCard;
