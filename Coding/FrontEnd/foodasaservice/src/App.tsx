import React from 'react';
import './App.css';

import Home from 'components/Home/home';
import Navbar from 'components/Navbar/navbar';

export function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <Navbar />
      </div>
      <Home />
    </div>
  );
}
