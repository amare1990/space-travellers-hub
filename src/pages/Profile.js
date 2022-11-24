import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';

const Profile = () => {
  console.log();
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  });

  return (
    <div className="Profile">
      {
      rockets.map((rocket) => (

        rocket.reserved ? (
          <li key={rocket.rocket_id}>
            {rocket.rocket_name}
          </li>
        ) : ''

      ))
        }
    </div>
  );
};

export default Profile;
