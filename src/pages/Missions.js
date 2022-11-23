import React from 'react';
import { useSelector } from 'react-redux';

const Missions = () => {
  const missionsArray = useSelector((state) => state.missions);

  return (

    <div className="missions-wrapper">
      { missionsArray.map((mission) => (

        <li key={mission.mission_id} className="mission-card">{mission.mission_name}</li>
      ))}

    </div>
  );
};

export default Missions;
