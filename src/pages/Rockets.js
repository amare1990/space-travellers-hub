import React from 'react';
import { useSelector } from 'react-redux';

const Rockets = () => {
  const rocketsArray = useSelector((state) => state.rockets);

  return (

    <div className="Rockets">
      { rocketsArray.map((rocket) => (
        <li key={rocket}>
          {rocket.rocket_name}
          {/* {rocket.description} */}
        </li>
      ))}
      <h1>Rockets here</h1>
    </div>
  );
};

export default Rockets;
