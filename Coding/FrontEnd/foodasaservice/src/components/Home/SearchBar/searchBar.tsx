import React, { useState } from 'react';
import './searchBar.css';
import { useAlert } from 'react-alert';
import searchBarIcon from 'assets/images/searchBarIcon.png';
import { Redirect, withRouter } from 'react-router-dom';

const SearchBar = props => {
  const [input, setInput] = useState('');
  let show = false;
  const handleChange = event => {
    show = true;
    setInput(event.target.value);
  };
  const onSubmitHandler = event => {
    event.preventDefault();
    props.history.push({
      pathname: '/dishes',
      state: input
    });
  };
  return (
    <div className='s01'>
      <form>
        <div className='inner-form'>
          <fieldset style={{ position: 'relative', top: '-10%' }}>
            <legend style={{ marginLeft: '10%' }}>
              Discover the Amazing Dishes
            </legend>
          </fieldset>
          <form onSubmit={onSubmitHandler}>
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

            <div className='input-field third-wrap'>
              <button className='btn-search' type='submit'>
                Search
              </button>
            </div>
          </form>
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

export default withRouter(SearchBar);
