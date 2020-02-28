import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

import navIcon from 'assests/images/navIcon.png';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <img src={navIcon} alt='NavIcon' style={{ height: '50px' }} />
        <NavbarBrand className='brand' href='/'>
          Food Next Door
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className='ml-auto'
            style={{ marginRight: '40px', fontWeight: 'bold' }}
            navbar
          >
            <NavItem>
              <NavLink>Chef</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Dish</NavLink>
            </NavItem>
          </Nav>

          <NavbarText>
            <button
              className='btn btn-success'
              style={{ fontFamily: 'monospace' }}
            >
              Login
            </button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
