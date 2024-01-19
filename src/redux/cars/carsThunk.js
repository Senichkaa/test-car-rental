import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://65a993cc219bfa3718697d82.mockapi.io/api/adverts/';

export const fetchCars = createAsyncThunk(
  'adverts/fetchCars',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get('/adverts', {
        params: {
          page,
          limit: 12,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
