import React from 'react';

import SearchBar from 'components/Home/SearchBar/searchBar';
import TrendingCooks from 'components/Home/TopCooks/trendingCooks';
import TrendingDishes from 'components/Home/TopDish/trendingDishes';

import HomePageImage from 'assests/images/HomePage1.png';

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
      <div className='cooks'>
        <TrendingCooks />
      </div>
      <div className='dishes'>
        <TrendingDishes />
      </div>
    </div>
  );
};

export default Home;
