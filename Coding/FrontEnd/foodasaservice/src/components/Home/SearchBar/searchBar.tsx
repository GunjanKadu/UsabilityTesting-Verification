import React from 'react';
import './searchBar.css';

const SearchBar = () => {
  return (
    <div className='s01'>
      <form>
        <div className='inner-form'>
          <fieldset>
            <legend>Discover the Amazing Dishes</legend>
          </fieldset>
          <div className='input-field first-wrap'>
            <img
              className='dish'
              style={{ height: '40px', width: '40px' }}
              src='https://image.flaticon.com/icons/png/512/33/33059.png'
              alt=''
            />
            <input
              id='search'
              type='text'
              placeholder='What are you looking for?'
            />
          </div>
          {/* <div className='input-field second-wrap'>
            <input id='location' type='text' placeholder='location' />
          </div> */}
          <div className='input-field third-wrap'>
            <button className='btn-search' type='button'>
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
