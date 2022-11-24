// Constants
const GET_ROCKET = 'space-travellers-hub/src/redux/rockets/fetchRockets';
const RESERVE_ROCKET = 'space-travellers-hub/src/redux/rockets/reserveRocket';

const initialState = [];
// const sN = 0;

// function that returns action

export const fetchRockets = (rockets) => ({
  type: GET_ROCKET,
  payload: rockets,
});

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

// Rocket reducer starts here
export default function rocketsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROCKET: {
      const rocketsArray = [];
      action.payload.map((rocket) => rocketsArray.push(
        {
          flickr_images: rocket.flickr_images,
          description: rocket.description,
          rocket_id: rocket.rocket_id,
          rocket_name: rocket.rocket_name,
          rocket_type: rocket.rocket_type,
          reserved: false,
        },
      ));
      return [...rocketsArray];
    }
    case RESERVE_ROCKET: {
      // console.log(`Inside Reserve rocket = ${state}`);
      // localStorage.setItem('reserved', )
      const rockets = state;
      const rocketsReserved = rockets.map((rocket) => {
        if (rocket.rocket_id === action.payload) return { ...rocket, reserved: true };
        return { ...rocket };
      });
      return rocketsReserved;
    }

    default:
      return state;
  }
}
