import React from 'react';
import DishItem from 'components/Dishes/DishList/DishItem/DishItem';

const DishList = ({ inputValue }) => {
  return (
    <div>
      <DishItem inputValue={inputValue} />
    </div>
  );
};

export default DishList;
