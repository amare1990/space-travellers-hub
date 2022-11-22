import { configureStore } from "@reduxjs/toolkit";
// import retrieveRocket from "./rockets/api/fetchRockets";
import rocketsReducer from "./rockets/rockets";


const store = configureStore({
  reducer: {rockets: rocketsReducer, missions: missionsReducer}
});

export default store;