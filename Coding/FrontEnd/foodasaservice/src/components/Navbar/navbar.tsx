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
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Spinner,
  Badge
} from 'reactstrap';
import { useAlert } from 'react-alert';

import { addValidation, logOut } from 'Redux/ActionCreators/Login';

import Login from 'components/Navbar/Login/login';
import UserIcon from 'assets/images/UserIcon.png';
import navIcon from 'assets/images/navIcon.png';

import './navbar.css';
const NavbarComponent = props => {
  //DropDown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropDown = () => setDropdownOpen(prevState => !prevState);

  //Alerts
  const alert = useAlert();
  const SignupSuccess = () =>
    alert.show(
      <div style={{ fontSize: '14px' }}>You Have Signed Up Successfully</div>,
      {
        timeout: 3000,
        type: 'success',
        transition: 'fade'
      }
    );
  const LoginSuccess = () =>
    alert.show(
      <div style={{ fontSize: '14px' }}>You Have Logged In Successfully</div>,
      {
        timeout: 3000,
        type: 'success',
        transition: 'fade'
      }
    );
  const LoginSuccessWelcome = () =>
    alert.show(<div style={{ fontSize: '14px' }}>Welcome</div>, {
      timeout: 3000,
      type: 'success',
      transition: 'fade'
    });

  const loginErrorMessage = props.account.LoginDetailsFailed.non_field_errors;
  const LoginFailed = () =>
    alert.show(<div style={{ fontSize: '14px' }}>{loginErrorMessage}</div>, {
      timeout: 3000,
      type: 'error',
      transition: 'fade'
    });
  const LogoutSuccess = () =>
    alert.show(<div style={{ fontSize: '14px' }}>See You Again</div>, {
      timeout: 3000,
      type: 'success',
      transition: 'fade'
    });

  //Validated
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('userToken')) {
      props.addValidation(true);
    } else {
      props.addValidation(false);
    }
  }, [props.account.LoginDetailsSuccess.token, props.account.isValidated]);

  //Login
  useEffect(() => {
    if (
      sessionStorage.getItem('userToken') &&
      sessionStorage.getItem('userPresent')
    ) {
      LoginSuccess();
      // setTimeout(() => {
      //   LoginSuccessWelcome();
      // }, 1000);

      sessionStorage.removeItem('userPresent');
    }
  }, [props.account.LoginDetailsSuccess.token, props.account.isValidated]);
  //Login Error
  useEffect(() => {
    if (loginErrorMessage) {
      LoginFailed();
    }
  }, [props.account.LoginDetailsFailed]);
  //Signup
  useEffect(() => {
    if (props.account.isSuccessfullyAdded) {
      SignupSuccess();
    }
  }, [props.account.isSuccessfullyAdded]);

  const showCartAlert = props.cart.CardAlert;
  const noOfCartItems = props.cart.CartContent.length;
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    props.logOut();
    LogoutSuccess();
  };
  const validated = props.account.isValidated;

  //Loading Effect
  const isAccountLoading = props.account.Loading;
  let loader;
  if (isAccountLoading) {
    loader = (
      <div>
        <Spinner color='dark' style={{ width: '1.5rem', height: '1.5rem' }} />
      </div>
    );
  } else {
    loader = (
      <img src={UserIcon} alt='' style={{ height: '45px', width: '45px' }} />
    );
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
                to='/dishes'
                activeClassName='navbar__link--active'
                className='navbar__link'
              >
                Dishes
              </NavLink>
            </NavItem>
            <NavItem style={{ position: 'relative' }}>
              <NavLink
                activeClassName='navbar__link--active'
                className='navbar__link'
                to='/cart'
              >
                Cart
              </NavLink>
              {noOfCartItems && showCartAlert ? (
                <Badge
                  style={{ position: 'absolute', left: '75%', top: '-30%' }}
                  color='danger'
                >
                  {noOfCartItems}
                </Badge>
              ) : null}
            </NavItem>
          </Nav>
          {validated ? (
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
              <DropdownToggle
                caret
                color='grey'
                style={{
                  border: '0',
                  backgroundColor: 'transparent',
                  borderColor: 'transparent'
                }}
              >
                {loader}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={handleLogout}
                  style={{ color: '#dc3545' }}
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
    account: state.account,
    cart: state.cart
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
