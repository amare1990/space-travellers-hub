// Constants
const GET_MISSION = 'space-travellers-hub/src/redux/rockets/fetchMissions';

const initialState = [];
// const sN = 0;

// function that returns action

export const fetchMissions = (missions) => ({
  type: GET_ROCKET,
  payload: missions,
});

export default function missionsReducer(state = initialState, action) {
  switch (action.type) {
    case action.missions: {
      const rocketsArray = [];
      action.rockets.forEach((rocket) => rocketsArray.push(
        {
          flickr_images: rocket.flickr_images,
          description: rocket.description,
          rocket_id: rocket.rocket_id,
          rocket_name: rocket.rocket_name,
        },
      ));
      return [...rocketsArray];
    }

    default:
      return state;
  }
}
