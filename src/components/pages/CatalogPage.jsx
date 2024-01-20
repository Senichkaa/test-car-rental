import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllCars,
  selectCarsPerPage,
  selectFilters,
  selectIsFiltered,
  selectFilteredCars,
  selectIsLoading,
  selectPage,
  selectIsLoadMore,
} from '../../redux/cars/carsSelectors';
import { fetchAllCars, fetchCarsPerPage } from '../../redux/cars/carsThunk';
import Filter from 'components/Filter/Filter';
import Cars from 'components/Cars/Cars';
import { MainContainer } from 'common/MainContainer';
import {
  CatalogSection,
  LoadMoreButton,
} from 'components/Cars/CarCard/CarCard.styled';
// import { brands } from 'components/Filter/brands';
import {
  setFilteredCars,
  setIsFiltered,
  setFilters,
  setPage,
} from '../../redux/cars/carsSlice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const allCars = useSelector(selectAllCars);
  const carsPerPage = useSelector(selectCarsPerPage);
  const isFiltered = useSelector(selectIsFiltered);
  const filteredCars = useSelector(selectFilteredCars);
  const filters = useSelector(selectFilters);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const isLoadMore = useSelector(selectIsLoadMore);

  useEffect(() => {
    dispatch(fetchCarsPerPage(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  console.log(isLoadMore);
  return (
    <CatalogSection>
      <MainContainer>
        <Filter
          cars={allCars}
          filters={filters}
          inFilter={value => dispatch(setFilteredCars(value))}
          isFiltered={isFiltered}
          changeIsFiltered={value => dispatch(setIsFiltered(value))}
          changeFilter={value => dispatch(setFilters(value))}
        />
        {!isLoading && <Cars cars={isFiltered ? filteredCars : carsPerPage} />}

        {/* {isLoadMore && (
          <LoadMoreButton
            type="button"
            onClick={() => dispatch(setPage(page + 1))}
          >
            Load some more
          </LoadMoreButton>
        )} */}

        {isLoadMore && (
          <LoadMoreButton
            type="button"
            onClick={() => dispatch(setPage(page + 1))}
          >
            Show more
          </LoadMoreButton>
        )}
      </MainContainer>
    </CatalogSection>
  );
};

export default CatalogPage;
