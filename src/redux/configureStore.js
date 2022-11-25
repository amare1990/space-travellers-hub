import { configureStore } from '@reduxjs/toolkit';
// import retrieveRocket from "./rockets/api/fetchRockets";
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
