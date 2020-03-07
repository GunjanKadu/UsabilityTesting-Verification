import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import DishList from 'components/Dishes/DishList/DishList';
import DishDetail from 'components/Dishes/DishDetail/DishDetail';
import SearchBar from 'components/Dishes/SearchBar/SearchBar';

import { fetchAllDishes } from 'Redux/ActionCreators/Dishes';

const Dish = props => {
  useEffect(() => {
    props.fetchAllDishes();
  });
  return (
    <div style={{ position: 'relative', top: '13%' }}>
      <div className='row'>
        <div className='col-4' style={{ height: '80vh' }}>
          <SearchBar />
          <DishList />
        </div>
        <div
          className='col-6'
          style={{
            height: '80vh'
          }}
        >
          <DishDetail />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    allDishes: state.AllDishes,
    account: state.Account
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchAllDishes: () => {
      dispatch(fetchAllDishes());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dish);
