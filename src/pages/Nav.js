import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';
import '../styles/Nav.css';

const NavBar = () => (
  <>
    <header className="header">

      <div className="logo-and-title">
        <img src={planet} alt="Logo" className="logo" />
        <h1 className="title">Space Traveler`s Hub</h1>
      </div>

      <ul className="navbar">
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
    <div className="horizontal-bar" />
  </>

);
export default NavBar;
