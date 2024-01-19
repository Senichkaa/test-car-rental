import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  // selectIsLoadMore,
  selectIsLoading,
  selectPage,
} from '../../redux/cars/carsSelectors';
import { fetchCars } from '../../redux/cars/carsThunk';
import Filter from 'components/Filter/Filter';
import Cars from 'components/Cars/Cars';
import { MainContainer } from 'common/MainContainer';
import { LoadMoreButton } from 'components/Cars/CarCard/CarCard.styled';
import { brands } from 'components/Filter/brands';
import { setPage } from '../../redux/cars/carsSlice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  // const isLoadMore = useSelector(selectIsLoadMore);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);
  return (
    <section>
      <MainContainer>
        <Filter />
        {!isLoading && <Cars cars={brands} />}

        {/* {isLoadMore && (
          <LoadMoreButton
            type="button"
            onClick={() => dispatch(setPage(page + 1))}
          >
            Load some more
          </LoadMoreButton>
        )} */}
        <LoadMoreButton
          type="button"
          onClick={() => dispatch(setPage(page + 1))}
        >
          Show more
        </LoadMoreButton>
      </MainContainer>
    </section>
  );
};

export default CatalogPage;
