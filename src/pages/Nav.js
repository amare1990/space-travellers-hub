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
          <NavLink
            className={({ isActive }) => (
              isActive ? 'active-link' : 'item')}
            to="/"
          >
            Rockets
          </NavLink>
        </li>
        <li className="link-item">
          <NavLink
            to="/Missions"
            className={({ isActive }) => (
              isActive ? 'active-link' : 'item')}
          >
            Missions
          </NavLink>
        </li>
        <li className="vertical-bar-links" />
        <li className="link-item">
          <NavLink
            to="/Profile"
            className={({ isActive }) => (
              isActive ? 'active-link' : 'item')}
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </header>
    <div className="horizontal-bar" />
  </>

);
export default NavBar;
