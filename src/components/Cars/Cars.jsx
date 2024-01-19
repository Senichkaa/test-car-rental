import React from 'react';
import { useSelector } from 'react-redux';

import { selectAllCars } from '../../redux/cars/carsSelectors';
import CarCard from './CarCard/CarCard';
import { CardsGrid } from './CarCard/CarCard.styled';

function Cars() {
  const cars = useSelector(selectAllCars);
  return (
    <>
      <CardsGrid>
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </CardsGrid>
    </>
  );
}

export default Cars;
