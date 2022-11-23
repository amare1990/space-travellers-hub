// Constants
const GET_MISSION = 'space-travellers-hub/src/redux/missions/fetchMissions';

const initialState = [];
// const sN = 0;

// function that returns action

export const fetchMissions = (missions) => ({
  type: GET_MISSION,
  missions,
});

export default function missionsReducer(state = initialState, action) {
  switch (action.type) {
    case action.missions: {
      const missionsArray = [];
      action.missions.forEach((mission) => missionsArray.push(
        {
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
        },
      ));
      return [...missionsArray];
    }

    default:
      return state;
  }
}
