import React from 'react';
import DishList from 'components/Dishes/DishList/DishList';
import DishDetail from 'components/Dishes/DishDetail/DishDetail';
import SearchBar from 'components/Dishes/SearchBar/SearchBar';
const Dish = () => {
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

export default Dish;
