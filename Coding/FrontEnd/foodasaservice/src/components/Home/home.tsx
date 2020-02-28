import React from 'react';
import { connect } from 'react-redux';

import SearchBar from 'components/Home/SearchBar/searchBar';
import HomePageImage from 'assests/images/HomePage1.png';

import './home.css';

const Home = props => {
  return (
    <div>
      <div className='wrapper'>
        <div className='searchBar'>
          <SearchBar />
        </div>
        <img className='HomeDish' src={HomePageImage} alt='Home Dish' />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    dishes: state.dish
  };
};

export default connect(mapStateToProps)(Home);
