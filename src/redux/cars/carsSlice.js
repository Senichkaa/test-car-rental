import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './carsThunk';

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    filters: {
      make: '',
      rentalPrice: '',
      startMileage: '',
      endMileage: '',
    },
    page: 1,
    limit: 12,
    isLoading: false,
    isLoadMore: true,
    error: null,
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(fetchCars.pending, state => {
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        return {
          ...state,
          cars: [...action.payload],
          isLoadMore:action.payload.length === state.limit,
          isLoading: false,
        };
      });
  },
});

export const { setFilters, setPage } = carsSlice.actions;
