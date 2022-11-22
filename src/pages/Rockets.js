import React from 'react';
import { useSelector } from 'react-redux';
// import retrieveRocket from '../redux/rockets/api/fetchRockets';

const Rockets = () => {
  const rocketsArray = useSelector((state) => state.rockets);
  /*  const dispatch = useDispatch();
  dispatch(retrieveRocket()); */

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
