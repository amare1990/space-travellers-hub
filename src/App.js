import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './pages/Nav';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import retrieveRocket from './redux/rockets/api/fetchRockets';
// import retrieveRocket from './redux/rockets/api/fetchRockets';

function App() {
  const rocketsArray = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  dispatch(retrieveRocket());
  // console.log(retrieveRocket());
  rocketsArray.forEach((element) => {
    console.log(`rocket name= ${element.rocket_name}`);
  });
  return (
    <div className="App">

      <NavBar />

      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
