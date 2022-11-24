import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rockets';
import retrieveRocket from '../redux/rockets/api/fetchRockets';
import '../styles/Rocket.css';
// { fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const rocketsArray = useSelector((state) => state.rockets);
  // console.log(rocketsArray[0].reserved);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rocketsArray.length) {
      dispatch(retrieveRocket());
    }
  });

  const handleRocketReservation = (id) => {
    localStorage.setItem('reserved', JSON.stringify({ id, reserved: true }));
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
            <p>
              reserved stat=
              {rocket.reserved}
            </p>
            {rocket.reserved ? (
              <h1>Reserved</h1>
            ) : (<h1>Cancel</h1>)}

            <button
              type="button"
              className="btn reserve-rocket-btn"
              onClick={() => handleRocketReservation(rocket.rocket_id)}
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
