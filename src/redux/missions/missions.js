import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const missions = await response.json();
    return missions;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: 'idle',
  },
  reducers: {
    reserveMission: (state, action) => ({
      ...state,
      missions: state.missions.map((thisMission) => {
        if (thisMission.mission_id === action.payload) {
          return {
            ...thisMission,
            reserved: true,
          };
        }
        return thisMission;
      }),
    }),
    cancelMission: (state, action) => ({
      ...state,
      missions: state.missions.map((thisMission) => {
        if (thisMission.mission_id === action.payload) {
          return {
            ...thisMission,
            reserved: false,
          };
        }

        return thisMission;
      }),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const value = state;
      value.missions = action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
    });

    builder.addCase(fetchMissions.rejected, (state) => {
      const failedState = state; failedState.status = 'failed';
    });
    builder.addCase(fetchMissions.pending, (_, action) => action.payload);
  },

});

export default missionsSlice.reducer;
export const { reserveMission, cancelMission } = missionsSlice.actions;
