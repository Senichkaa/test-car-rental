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
  FavoriteHeart,
} from './CarCard.styled';
import CarModal from 'components/CarModal/CarModal';
import {
  addToFavoriteList,
  removeFavoriteList,
} from '../../../redux/favorite/favoriteSlice';
import sprite from '../../../assets/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';

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

  const favorite = useSelector(state => state.favorite.favorites);
  const favoriteStatus = favorite.includes(id);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const favoriteHandler = () => {
    if (favoriteStatus) {
      dispatch(removeFavoriteList(id));
    } else {
      dispatch(addToFavoriteList(id));
    }
  };

  return (
    <Card>
      <ImageWrapper>
        <FavoriteHeart onClick={favoriteHandler}>
          {favoriteStatus ? (
            <svg width={18} height={18}>
              <use href={`${sprite}#icon-heartactive`} />
            </svg>
          ) : (
            <svg width={18} height={18}>
              <use href={`${sprite}#icon-heartbasic`} />
            </svg>
          )}
        </FavoriteHeart>
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
