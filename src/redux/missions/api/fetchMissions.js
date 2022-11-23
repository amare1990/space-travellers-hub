import { createAsyncThunk } from '@reduxjs/toolkit';
import { urlMissions } from '../../../http-common';
import { fetchMissions } from '../missions';

const LOAD_MISSION = 'missions/fetchMissions';

const retrieveMission = createAsyncThunk(LOAD_MISSION, async (_, thunkAPI) => {
  const response = await fetch(urlMissions, {
    method: 'GET',
  });
  const responseJSON = await response.json();
  thunkAPI.dispatch(fetchMissions(responseJSON));
  return responseJSON;
});
export default retrieveMission;
