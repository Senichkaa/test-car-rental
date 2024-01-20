import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainContainer } from 'common/MainContainer';
import Filter from 'components/Filter/Filter';
import Cars from 'components/Cars/Cars';

import { fetchAllCars } from '../../redux/cars/carsThunk';
import {
  selectFavoriteFilters,
  selectFavoriteFiltered,
  selectIsFavoriteFiltered,
} from '../../redux/favorite/favoriteSelectors';
import {
  setFavoriteFilters,
  setFavoriteFiltered,
  setIsFavoriteFiltered,
} from '../../redux/favorite/favoriteSlice';
import { selectAllCars } from '../../redux/cars/carsSelectors';

const FavoritePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);
  const favorite = useSelector(state => state.favorite.favorites);
  const cars = useSelector(selectAllCars);
  const favoriteCars = cars.filter(item => favorite.includes(item.id));
  const isFavoriteFiltered = useSelector(selectIsFavoriteFiltered);
  const favoriteFilters = useSelector(selectFavoriteFilters);
  const filteredFavorite = useSelector(selectFavoriteFiltered);
  return (
    <>
      <MainContainer>
        <section>
          <Filter
            cars={favoriteCars}
            filters={favoriteFilters}
            inFilter={value => dispatch(setFavoriteFiltered(value))}
            isFiltered={isFavoriteFiltered}
            changeIsFiltered={value => dispatch(setIsFavoriteFiltered(value))}
            changeFilter={value => dispatch(setFavoriteFilters(value))}
          />
          <Cars cars={isFavoriteFiltered ? filteredFavorite : favoriteCars} />
        </section>
      </MainContainer>
    </>
  );
};

export default FavoritePage;
