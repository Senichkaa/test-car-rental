import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carsSlice } from './cars/carsSlice';
import { favoriteSlice } from './favorite/favoriteSlice';

const carPersistConfig = {
  key: 'car',
  storage,
  whitelist: ['filteredCars', 'filter', 'isFiltered', 'page'],
};

const favoritePersistConfig = {
  key: 'favorite',
  storage,
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(carPersistConfig, carsSlice.reducer),
    favorite: persistReducer(favoritePersistConfig, favoriteSlice.reducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
