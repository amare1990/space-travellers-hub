// Constants
const GET_ROCKET = 'space-travellers-hub/src/redux/rockets/fetchRocket';

const initialState = [];
// const sN = 0;

// function that returns action

export const fetchRockets = (rockets) => ({
  type: GET_ROCKET,
  payload: rockets,
});

export default function rocketsReducer(state = initialState, action) {
  switch (action.type) {
    case action.rockets: {
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
