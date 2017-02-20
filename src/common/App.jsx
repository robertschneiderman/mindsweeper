import React from 'react';
import Navbar from './Navbar';
import Game from '../pages/game/components';

const App = (props) => (
  <div className="app">
    <Navbar />
    <Game />
  </div>
);

export default App;