import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchMissions } from '../redux/missions/missions';
import retrieveMission from '../redux/missions/api/fetchMissions';

const Missions = () => {
  const missionsArray = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  dispatch(retrieveMission());

  return (

    <div className="missions-wrapper">
      { missionsArray.map((mission) => (

        <li key={mission.mission_id} className="mission-card">
          {mission.mission_name}

        </li>
      ))}

      <h1> Missions</h1>

    </div>
  );
};

export default Missions;
