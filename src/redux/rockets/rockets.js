// Constants
const GET_ROCKET = 'space-travellers-hub/src/redux/rockets/fetchRocket';

const initialState = [];
const sN = 0;

// function that returns action

export const fetchRockets = (rockets) => ({
  type: GET_ROCKET,
  payload: rockets,
});

export default function rocketsReducer(state = initialState, action) {
  switch (action.type) {
    case action.rockets: {
      const rocketsArray = [];
      Object.entries(action.rockets).forEach(([key, value]) => rocketsArray.push(
        { sN: sN + 1 }, [{
          id: key,
          active,
          stages,
          boosters,
          cost_per_launch,
          success_rate_pct,
          first_flight,
          country,
          comapny,
          height: { metres, feet },
          diameter: { meters, feet },
          mass: { kg, lb },
          payload_weights: [{
            id, name, kg, lb,
          }],
          first_stage: {
            reusable,
            engines,
            fuel_amount_tons,
            burn_time_sec,
            thrust_sea_level: { kN, lbf },
            thrust_vacuum: { kN, lbf },
          },
          second_stage: {
            reusable,
            engines,
            fuel_amount_tons,
            burn_time_sec,
            thrust: { kN, lbf },
            payloads: {
              option_1,
              composite_fairing: { height: { meters, feet }, diameter: { meters, feet } },
            },
          },
          engines: {
            number,
            type,
            version,
            layout,
            isp: { sea_level, vaccum },
            engine_loss_max,
            popellant_1,
            popellant_2,
            thrust_sea_level: { kN, lbf },
            thrust_vacuum: { kN, lbf },
            thrust_to_weight,
          },
          landing_legs: { number, material },
          flickr_images: [],
          wikipedia,
          description,
          rocket_id,
          rocket_name,
          rocket_type,
        }],
      ));
      return [...rocketsArray];
    }

    default:
      return state;
  }
}
