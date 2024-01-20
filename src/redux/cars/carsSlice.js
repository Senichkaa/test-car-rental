import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars, fetchCarsPerPage } from './carsThunk';

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    allCars: [],
    carsPerPage: [],
    filteredCars: [],
    filters: {
      make: '',
      rentalPrice: '',
      startMileage: '',
      endMileage: '',
    },
    page: 1,
    limit: 12,
    isLoading: false,
    isFiltered: false,
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
    setIsFiltered: (state, action) => {
      state.isFiltered = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setFilteredCars: (state, action) => {
      state.filteredCars = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCars.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(fetchAllCars.pending, state => {
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        return {
          ...state,
          allCars: [...action.payload],
          isLoadMore: action.payload.length === state.limit,
          isLoading: false,
        };
      })
      .addCase(fetchCarsPerPage.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
        };
      })
      .addCase(fetchCarsPerPage.pending, state => {
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      })
      .addCase(fetchCarsPerPage.fulfilled, (state, action) => {
        return {
          ...state,
          carsPerPage: [...action.payload],
          isLoading: false,
        };
      });
  },
});

export const {
  setFilters,
  setPage,
  setIsLoading,
  setIsFiltered,
  setFilteredCars,
} = carsSlice.actions;
