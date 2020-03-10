import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import DishList from 'components/Dishes/DishList/DishList';
import DishDetail from 'components/Dishes/DishDetail/DishDetail';
import SearchBar from 'components/Dishes/SearchBar/SearchBar';
import { fetchAllDishes } from 'Redux/ActionCreators/Dishes';

const Dish = props => {
  const [input, setInput] = useState();
  useEffect(() => {
    props.fetchAllDishes();
  }, []);

  const handleChange = event => {
    console.log(input);
    setInput(event.target.value);
  };

  return (
    <div style={{ position: 'relative', top: '13%', fontSize: 11 }}>
      <div className='row'>
        <div className='col-4' style={{ height: '80vh' }}>
          <SearchBar onChangeValue={handleChange} value={input} />
          <DishList inputValue={input} />
        </div>
        <div
          className='col-6'
          style={{
            height: '80vh'
          }}
        >
          <Route path='/dishes/:id' component={DishDetail} />
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
