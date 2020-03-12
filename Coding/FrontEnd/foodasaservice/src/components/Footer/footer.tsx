import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <footer className='footer-distributed'>
      <div className='footer-right'>
        <Link to='/'>
          <i className='fa fa-facebook'></i>
        </Link>
        <Link to='/'>
          <i className='fa fa-twitter'></i>
        </Link>
        <Link to='/'>
          <i className='fa fa-linkedin'></i>
        </Link>
        <Link to='/'>
          <i className='fa fa-github'></i>
        </Link>
      </div>

      <div className='footer-left'>
        <p className='footer-links'>
          <a className='link-1' href='#'>
            Home
          </a>

          <a href='#'>Blog</a>

          <a href='#'>Pricing</a>

          <a href='#'>About</a>

          <a href='#'>Faq</a>

          <a href='#'>Contact</a>
        </p>

        <p>Food Next Door &copy; 2020</p>
      </div>
    </footer>
  );
};
