import { createAsyncThunk } from '@reduxjs/toolkit';
import { urlRockets } from '../../../http-common';
import { fetchRockets } from '../rockets';

const LOAD_ROCKET = 'rockets/fetchRockets';

const retrieveRocket = createAsyncThunk(LOAD_ROCKET, async (_, thunkAPI) => {
  const response = await fetch(urlRockets, {
    method: 'GET',
  });
  const responseJSON = await response.json();
  thunkAPI.dispatch(fetchRockets(responseJSON));
  return responseJSON;
});
export default retrieveRocket;
