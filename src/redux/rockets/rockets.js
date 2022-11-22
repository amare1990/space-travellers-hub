// Constants
const GET_ROCKET = 'space-travellers-hub/src/redux/rockets/fetchRockets';

const initialState = [];
// const sN = 0;

// function that returns action

export const fetchRockets = (rockets) => ({
  type: GET_ROCKET,
  payload: rockets,
});

export default function rocketsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROCKET: {
      const rocketsArray = [];
      action.payload.forEach((rocket) => rocketsArray.push(
        {
          flickr_images: rocket.flickr_images,
          description: rocket.description,
          rocket_id: rocket.rocket_id,
          rocket_name: rocket.rocket_name,
          rocket_type: rocket.rocket_type,
        },
      ));
      return [...rocketsArray];
    }

    default:
      return state;
  }
}
