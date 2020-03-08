import React, { useState } from 'react';
import './searchBar.css';
import { useAlert } from 'react-alert';

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
          <fieldset>
            <legend style={{ marginLeft: '18%' }}>
              Discover the Amazing Dishes
            </legend>
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
