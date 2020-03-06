import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'components/Home/home';
import Navbar from 'components/Navbar/navbar';
import Dishes from 'components/Dishes/Dishes';
import Chefs from 'components/Chefs/Chefs';

export function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <Navbar />
      </div>
      <Switch>
        <Route path='/' exact component={Home} />
        <div style={{ position: 'absolute', top: '10%' }}>
          <Route path='/dishes' component={Dishes} />
          <Route path='/chefs' component={Chefs} />
        </div>
      </Switch>
      <Redirect to='/' />
    </div>
  );
}
