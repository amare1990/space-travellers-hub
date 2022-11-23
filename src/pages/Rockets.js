import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Rocket.css';

const Rockets = () => {
  const rocketsArray = useSelector((state) => state.rockets);

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
            <button type="button" className="btn reserve-rocket-btn">
              Reserve Rocket
            </button>
          </div>

        </li>
      ))}
      <h1>Rockets here</h1>
    </div>
  );
};

export default Rockets;
