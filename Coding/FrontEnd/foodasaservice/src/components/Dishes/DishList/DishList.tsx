import React from 'react';
import DishItem from 'components/Dishes/DishList/DishItem/DishItem';

const DishList = ({ inputValue, searchParams }) => {
  return (
    <div>
      <DishItem inputValue={inputValue} searchParams={searchParams} />
    </div>
  );
};

export default DishList;
