import React from 'react';

import SearchBar from 'components/Home/SearchBar/searchBar';
import TrendingDishes from 'components/Home/TopDish/trendingDishes';
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
        <div className='row'>
          <div className='col-md-6'>
            <TrendingDishes />
          </div>
          <div className='col-md-6'>
            <TrendingDishes />
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
