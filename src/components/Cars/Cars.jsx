import React from 'react';
import CarCard from './CarCard/CarCard';
import { CardsGrid } from './CarCard/CarCard.styled';

function Cars({ cars }) {
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
