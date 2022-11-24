import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
// import { fetchMissions } from '../redux/missions/missions';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  /* const missions = useSelector((state) => state.missions.missions); */
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  });

  /*  useEffect(()=> {
    if(missions.length === 0) {
      dispatch(fetchMissions());
    }
  }); */

  return (
    <div className="Profile">

      {/* <div className="reserved-missions-wrapper">
        <h3 className="profile-title profile-title-mission">
          My Missions
        </h3>
        <ul className="reserved-profile reserved-profile-mission ">
          {
          missions.map((mission) => (
            mission.reserved ? (
              <li key={mission.mission_id} className="reserved-mission-item">
                {mission.mission_name}
              </li>
            ) : ''
          ))
          }

        </ul>
      </div> */}

      <div className="reserved-rockets-wrapper">
        <h3 className="profile-title profile-title-rocket">
          My Rockets
        </h3>
        <ul className="reserved-profile reserved-profile-rocket ">
          {
          rockets.map((rocket) => (
            rocket.reserved ? (
              <li key={rocket.rocket_id} className="reserved-rocket-item">
                {rocket.rocket_name}
              </li>
            ) : ''
          ))
          }

        </ul>
      </div>

    </div>
  );
};

export default Profile;
