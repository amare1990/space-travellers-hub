import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchMissions } from '../redux/missions/missions';
// import retrieveMission from '../redux/missions/api/fetchMissions';
import { reserveMission, fetchMissions, cancelMission } from '../redux/missions/missions';
import '../styles/Missions.css';

const Missions = () => {
  const missionsArray = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missionsArray.length) {
      dispatch(fetchMissions());
    }
  });

  /* const handleMissionJoin = (id) => {
    // localStorage.setItem('reserved', JSON.stringify({ id, reserved: true }));
    dispatch(reserveMission(id));
  }; */

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
          <div className="missionMember">
            {mission.reserved ? (<button type="button" className="missionMemberActive">Active MEMBER</button>)
              : (<button type="button" className="missionMemberNot">NOT A MEMBER</button>)}
          </div>
          <div className="missionButton">
            {mission.reserved ? (
              <button
                type="button"
                className="leavebutton"
                onClick={() => dispatch(cancelMission(mission.mission_id))}
              >
                Leave Mission
              </button>
            )
              : (
                <button
                  type="button"
                  onClick={() => dispatch(reserveMission(mission.mission_id))}
                >
                  Join Mission
                </button>
              )}
          </div>
        </li>
      ))}

    </div>
  );
};

export default Missions;
