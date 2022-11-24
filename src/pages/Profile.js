import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  });

    <div className="Profile">
      {
      rockets.forEach((rocket) => (
        rocket.rocket_id ? (
          <li key={rocket.rocket_id}>
            rocket.rocket_name
          </li>
        ) : "Yo didn't reserve any rocket yet"
      ))
        }
    </div>;
};

export default Profile;
