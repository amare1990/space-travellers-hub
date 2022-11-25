import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import '../styles/Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  });

  return (
    <div className="profile">

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

        </div>
      </div>

    </div>
  );
};

export default Profile;
