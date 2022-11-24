import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchMissions } from '../redux/missions/missions';
import retrieveMission from '../redux/missions/api/fetchMissions';
import '../styles/Missions.css';

const Missions = () => {
  const missionsArray = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  dispatch(retrieveMission());

  return (

    <div className="missions-wrapper">

      <li className="mission-card">
        <div className="missionName"><h3>Mission</h3></div>
        <div className="missionDescription"><h3>Description</h3></div>
        <div className="missionMember"><h3>Status</h3></div>
        <div className="missionButton" />
      </li>

      { missionsArray.map((mission) => (

        <li key={mission.mission_id} className="mission-card">
          <div className="missionName"><h3>{mission.mission_name}</h3></div>
          <div className="missionDescription"><p>{mission.description}</p></div>
          <div className="missionMember"><button type="button">NOT A MEMBER</button></div>
          <div className="missionButton"><button type="button">Join Mission</button></div>
        </li>
      ))}

    </div>
  );
};

export default Missions;
