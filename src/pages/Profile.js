import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import { fetchMissions } from '../redux/missions/missions';

import '../styles/Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  });

  const joinedMissions = missions.filter((mission) => mission.reserved);
  let flagMission = false;
  if (joinedMissions.length !== 0) {
    flagMission = true;
  }

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  let flagRocket = false;
  if (reservedRockets.length !== 0) {
    flagRocket = true;
  }

  return (
    <div className="profile">

      <div className="reserved-missions-wrapper">
        <h3 className="profile-title profile-title-mission">
          My Missions
        </h3>

        <div className="reserved-profile reserved-profile-mission ">
          {
          missions.map((mission) => (
            mission.reserved ? (
              <div key={mission.mission_id} className="reserved-item reserved-mission-item">
                {mission.mission_name}
              </div>
            ) : ''
          ))
          }
          <div className="flag-wrapper">
            <p className="no-joined-reserved">
              {flagMission ? '' : 'No Missions Selected Yet!'}
            </p>
          </div>

        </div>
      </div>

      <div className="reserved-rockets-wrapper">
        <h3 className="profile-title profile-title-rocket">
          My Rockets
        </h3>
        <div className="reserved-profile reserved-profile-rocket ">
          {
          rockets.map((rocket) => (
            rocket.reserved ? (
              <div key={rocket.rocket_id} className="reserved-item reserved-rocket-item">
                {rocket.rocket_name}

              </div>
            ) : ''
          ))
          }

          <div className="flag-wrapper">
            <p className="no-joined-reserved">
              {flagRocket ? ''
                : 'No Rockets Selected Yet!'}
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Profile;
