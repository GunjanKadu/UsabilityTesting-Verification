import React from 'react';
import './working.css';
const Working = () => {
  return (
    <div className='background'>
      <div className='container'>
        <div className='panel pricing-table'>
          <div className='pricing-plan'>
            <img
              src='https://s22.postimg.cc/8mv5gn7w1/paper-plane.png'
              alt=''
              className='pricing-img'
            />
            ><h2 className='pricing-header'>Personal</h2>
            <ul className='pricing-features'>
              <li className='pricing-features-item'>Working</li>
              <li className='pricing-features-item'>Working</li>
            </ul>
            <a href='#/' className='pricing-button is-featured'>
              Sign up
            </a>
          </div>

          <div className='pricing-plan'>
            <img
              src='https://s28.postimg.cc/ju5bnc3x9/plane.png'
              alt=''
              className='pricing-img'
            />
            <h2 className='pricing-header'>Small team</h2>
            <ul className='pricing-features'>
              <li className='pricing-features-item'>Working</li>
              <li className='pricing-features-item'>Working</li>
            </ul>
            <a href='#/' className='pricing-button is-featured'>
              Order
            </a>
          </div>

          <div className='pricing-plan'>
            <img
              src='https://s21.postimg.cc/tpm0cge4n/space-ship.png'
              alt=''
              className='pricing-img'
            />
            <h2 className='pricing-header'>Enterprise</h2>
            <ul className='pricing-features'>
              <li className='pricing-features-item'>Working</li>
              <li className='pricing-features-item'>Working</li>
            </ul>
            <a href='#/' className='pricing-button is-featured'>
              Eat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Working;
