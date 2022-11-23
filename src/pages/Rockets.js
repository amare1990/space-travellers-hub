import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rockets';
import '../styles/Rocket.css';

const Rockets = () => {
  const rocketsArray = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  // dispatch(reserveRocket());

  const handleReserveRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  return (

    <div className="rockets-wrapper">
      { rocketsArray.map((rocket) => (

        <li key={rocket.rocket_id} className="rocket-card">
          <img
            src={rocket.flickr_images[0]}
            alt={rocket.rocket_name}
            className="rocket-img {rocket.rocket_name}"
          />
          <div className="rocket-body">
            <p className="rocket-title">
              {rocket.rocket_name}
            </p>
            <p className="rocket-description">
              {rocket.description}
            </p>
            <button
              type="button"
              className="btn reserve-rocket-btn"
              onClick={handleReserveRocket(rocket.rocket_id)}
            >
              Reserve Rocket
            </button>
          </div>

        </li>
      ))}
    </div>
  );
};

export default Rockets;
