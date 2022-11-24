// Constants
const GET_MISSION = 'space-travellers-hub/src/redux/missions/fetchMissions';
const RESERVE_MISSION = 'space-travellers-hub/src/redux/missions/reserveMission';

const initialState = [];
// const sN = 0;

// function that returns action

export const fetchMissions = (missions) => ({
  type: GET_MISSION,
  missions,
});

export const reserveMission = (id) => ({
  type: RESERVE_MISSION,
  payload: id,
});

export default function missionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MISSION: {
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
    case RESERVE_MISSION: {
      // console.log(`Inside Reserve rocket = ${state}`);
      // localStorage.setItem('reserved', )
      const missions = state;
      const missionsReserved = missions.map((mission) => {
        if (mission.mission_id === action.payload) return { ...mission, reserved: true };
        return { ...mission };
      });
      return missionsReserved;
    }

    default:
      return state;
  }
}
