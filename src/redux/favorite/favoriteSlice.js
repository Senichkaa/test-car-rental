import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: [],
    favoriteFiltered: [],
    favoriteFilters: {
      make: '',
      rentalPrice: '',
      startMileage: '',
      endMileage: '',
    },
    isFavoriteFiltered: false,
  },
  reducers: {
    setIsFavoriteFiltered: (state, action) => {
      state.isFavoriteFiltered = action.payload;
    },
    setFavFilters: (state, action) => {
      state.favoriteFilters = { ...state.favoriteFilters, ...action.payload };
    },
    addToFavoriteList(state, action) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavoriteList(state, action) {
      state.favorites = state.favorites.filter(car => car !== action.payload);
    },
    setFavoriteFiltered: (state, action) => {
      state.favoriteFiltered = action.payload;
    },
  },
});
export const {
  addToFavoriteList,
  setFavoriteFiltered,
  removeFavoriteList,
  setFavoriteFilters,
  setIsFavoriteFiltered,
} = favoriteSlice.actions;
