import { createAsyncThunk } from '@reduxjs/toolkit';
import { urlMissions } from '../../../http-common';
import { fetchMissions } from '../missions';

const LOAD_ROCKET = 'rockets/fetchRockets';

const retrieveMission = createAsyncThunk(LOAD_ROCKET, async (_, thunkAPI) => {
  const response = await fetch(urlMissions, {
    method: 'GET',
  });
  const responseJSON = await response.json();
  thunkAPI.dispatch(fetchMissions(responseJSON));
  return responseJSON;
});
export default retrieveMission;
