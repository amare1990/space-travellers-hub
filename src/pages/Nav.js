import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';
import '../styles/Nav.css';

const NavBar = () => (
  <header className="header">

    <div className="logo">
      <img src={planet} alt="Logo" />
    </div>

    <div className="title">
      <h1>Space Traveler`s Hub</h1>
    </div>

      <ul className="ul-nav">
        <li className="link-item">
          <NavLink className="item" to="/">
            Rockets
          </NavLink>
        </li>
        <li className="link-item">
          <NavLink className="item" to="/Missions">
            Missions
          </NavLink>
        </li>
        <li className="link-item">
          <NavLink className="item" to="/Profile">
            My Profile
          </NavLink>
        </li>
      </ul>
  </header>
);
export default NavBar;
