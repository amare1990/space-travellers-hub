import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const responseJSON = await response.json();
    return responseJSON;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: 'Not Requested Yet',
  },
  reducers: {
    reserveRocket: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.rocket_id === action.payload) {
          return {
            ...rocket,
            reserved: true,
          };
        }
        return rocket;
      }),
    }),
    cancelRocket: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.rocket_id === action.payload) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      }),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const rocketsState = state;
      rocketsState.rockets = action.payload.map((rocket) => ({
        rocket_id: rocket.rocket_id,
        rocket_name: rocket.rocket_name,
        flickr_images: rocket.flickr_images,
        description: rocket.description,
        reserved: false,
      }));
    });

    builder.addCase(fetchRockets.rejected, (state) => {
      const failedState = state;
      failedState.status = 'failed';
    });
    builder.addCase(fetchRockets.pending, (state) => {
      const pendingState = state;
      pendingState.status = 'Pending';
    });
  },

});

export default rocketsSlice.reducer;
export const { reserveRocket, cancelRocket } = rocketsSlice.actions;
