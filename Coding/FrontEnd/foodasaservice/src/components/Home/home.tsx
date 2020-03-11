import React from 'react';

import { Badge } from 'reactstrap';
import SearchBar from 'components/Home/SearchBar/searchBar';
import TrendingDishes from 'components/Home/TopDish/trendingDishes';
import TrendingCooks from 'components/Home/TopCooks/trendingCooks';
import Working from 'components/Home/Working/working';
import HomePageImage from 'assets/images/HomePage1.png';

import './home.css';

const Home = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='searchBar'>
          <SearchBar />
        </div>
        <img className='HomeDish' src={HomePageImage} alt='Home Dish' />
      </div>
      <div className='container' style={{ marginTop: '-10%' }}>
        <h2 style={{ position: 'relative', left: '41%', top: '-5%' }}>
          <Badge color='danger'>Featured Dishes</Badge>
        </h2>
        <div className='row'>
          <div className='col-md-6'>
            <TrendingDishes />
          </div>
          <div className='col-md-6'>
            <TrendingCooks />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='working'>
            <Working />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
