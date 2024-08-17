import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SongList from './components/SongList';

import PlayerPage1 from './components/PlayerPage';

import './App.css';
import PlayerPage2 from './components/PlayerPage2';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<SongList />} />
          <Route path="/song1" element={<PlayerPage1 />} />
          <Route path="/song2" element={<PlayerPage2 />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
