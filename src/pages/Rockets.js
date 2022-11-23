import React from 'react';
import { useSelector } from 'react-redux';

const Rockets = () => {
  const rocketsArray = useSelector((state) => state.rockets);

  return (

    <div className="Rockets">
      { rocketsArray.map((rocket) => (

        <li key={rocket}>

          {rocket.rocket_name}
          <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />

        </li>

      ))}
    </div>
  );
};

export default Rockets;
