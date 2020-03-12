import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'components/Home/home';
import Navbar from 'components/Navbar/navbar';
import Dishes from 'components/Dishes/Dishes';
import Cart from 'components/Cart/Cart';
import { Profile } from 'components/Profile /profile';
import { AddDish } from 'components/AddDish/AddDish';
export function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <Navbar />
      </div>
      <Switch>
        <Route path='/' exact component={Home} />
        <div
          style={{
            position: 'absolute',
            top: '1%',
            width: '100vw',
            height: '100vh'
          }}
        >
          <Route path='/dishes' component={Dishes} />
          <Route path='/cart' component={Cart} />
          <Route path='/profile' component={Profile} />
          <Route path='/addDish' component={AddDish} />
        </div>
      </Switch>
      <Redirect to='/' />
    </div>
  );
}
