import React, { useState } from 'react';
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
import CarModal from 'components/CarModal/CarModal';

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      <MoreButton type="button" onClick={openModal}>
        Learn more
      </MoreButton>
      {isModalOpen && <CarModal onClose={closeModal} car={car} />}
    </Card>
  );
}

export default CarCard;
