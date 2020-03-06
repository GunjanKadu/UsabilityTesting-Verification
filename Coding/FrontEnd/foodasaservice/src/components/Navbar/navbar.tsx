import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Spinner
} from 'reactstrap';
import Login from 'components/Navbar/Login/login';
import navIcon from 'assests/images/navIcon.png';
import { addValidation, logOut } from 'Redux/ActionCreators/Login';

import './navbar.css';
const NavbarComponent = props => {
  //Validated
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('userData')) {
      props.addValidation(true);
    }
  }, [props.account.LoginDetails.token, props.account.isValidated]);

  useEffect(() => {
    if (sessionStorage.getItem('userData')) {
      props.addValidation(true);
    } else {
      props.addValidation(false);
    }
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    props.logOut();
  };
  const validated = props.account.isValidated;

  //Loading Effect
  const isAccountLoading = props.account.Loading;
  let loader;
  if (isAccountLoading) {
    loader = (
      <div>
        <Spinner size='sm' color='light' />
      </div>
    );
  } else {
    loader = <span>Logout</span>;
  }
  return (
    <div>
      <Navbar color='light' light expand='md'>
        <img src={navIcon} alt='NavIcon' style={{ height: '50px' }} />
        <NavbarBrand className='brand'>
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
            Food Next Door
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className='ml-auto'
            style={{ marginRight: '40px', fontWeight: 'bold' }}
            navbar
          >
            <NavItem>
              <NavLink
                activeClassName='navbar__link--active'
                className='navbar__link'
                to='/chefs'
              >
                Chef
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='/dishes'
                activeClassName='navbar__link--active'
                className='navbar__link'
              >
                Dishes
              </NavLink>
            </NavItem>
          </Nav>
          {validated ? (
            <Button className='danger' onClick={handleLogout}>
              {loader}
            </Button>
          ) : (
            <Login buttonLabel='Login' title='Login' />
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    addValidation: value => {
      dispatch(addValidation(value));
    },
    logOut: () => {
      dispatch(logOut());
    }
  };
};
const mapStateToProps = state => {
  return {
    account: state.account
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
