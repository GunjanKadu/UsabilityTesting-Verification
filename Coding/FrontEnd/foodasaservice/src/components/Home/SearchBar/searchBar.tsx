import React, { useState } from 'react';
import './searchBar.css';
import { useAlert } from 'react-alert';
import searchBarIcon from 'assets/images/searchBarIcon.png';
const SearchBar = () => {
  const [input, setInput] = useState();
  let show = false;
  const handleChange = event => {
    show = true;
    setInput(event.target.value);
  };
  return (
    <div className='s01'>
      <form>
        <div className='inner-form'>
          <fieldset style={{ position: 'relative', top: '-10%' }}>
            <legend style={{ marginLeft: '15%' }}>
              Discover the Amazing Dishes
            </legend>
          </fieldset>
          <div className='input-field first-wrap'>
            <img
              className='dish'
              style={{ height: '40px', width: '40px' }}
              src={searchBarIcon}
              alt=''
            />
            <input
              id='search'
              type='text'
              value={input}
              placeholder='What are you looking for?'
              onChange={handleChange}
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
          {show ? (
            <div>
              <button className='btn-search' type='button'>
                Hello
              </button>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
