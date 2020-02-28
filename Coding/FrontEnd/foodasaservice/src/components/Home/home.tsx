import React from 'react';
import { connect } from 'react-redux';

import SearchBar from 'components/Home/SearchBar/searchBar';
import TrendingCooks from 'components/Home/TopCooks/trendingCooks';
import TrendingDishes from 'components/Home/TopDish/trendingDishes';

import HomePageImage from 'assests/images/HomePage1.png';

import './home.css';

const arr: number[] = [1, 2, 3, 4];
let trendingCooks = arr.map(num => {
  return <TrendingCooks />;
});

const Home = props => {
  return (
    <div>
      <div className='wrapper'>
        <div className='searchBar'>
          <SearchBar />
        </div>
        <img className='HomeDish' src={HomePageImage} alt='Home Dish' />
      </div>
      <div className='cooks'>{trendingCooks}</div>
      <div className='dishes'>{trendingCooks}</div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    dishes: state.dish
  };
};

export default connect(mapStateToProps)(Home);
