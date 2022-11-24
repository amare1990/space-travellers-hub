import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserveRocket, cancelRocket } from '../redux/rockets/rockets';
// import retrieveRocket from '../redux/rockets/api/fetchRockets';
import '../styles/Rocket.css';
// import { fetchRockets } from './redux/rockets/rockets';
/* import { cancelRocket } from '../redux/rockets/rockets';
 */
const Rockets = () => {
  const rocketsArray = useSelector((state) => state.rockets.rockets);
  // console.log(rocketsArray[0].reserved);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rocketsArray.length === 0) {
      dispatch(fetchRockets());
    }
  });

  /*  const handleRocketReservation = (id) => {
    dispatch(reserveRocket(id));
  }; */

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
              {rocket.reserved && (
              <span className="reserved-text"> Reserved</span>
              )}
              {rocket.description}
            </p>
            <p>
              reserved stat=
              {rocket.reserved}
            </p>
            {rocket.reserved ? (
              <h1>Reserved</h1>
            ) : ''}

            {rocket.reserved
              ? (
                <button
                  type="button"
                  className="btn reserve-rocket-btn"
                  onClick={() => dispatch(cancelRocket(rocket.rocket_id))}
                >
                  Cancel Reservation
                </button>
              )
              : (
                <button
                  type="button"
                  className="btn reserve-rocket-btn"
                  onClick={() => dispatch(reserveRocket(rocket.rocket_id))}
                >
                  Reserve Rocket
                </button>
              )}

          </div>

        </li>
      ))}
    </div>
  );
};

export default Rockets;
