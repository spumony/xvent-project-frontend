import React, { useState } from 'react';
import {
  Collapse,
  Navbar as Navmenu,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container,
} from 'reactstrap';
import Logo from '../../../../static/img/svg/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navmenu className='pt-4' color='transparent' light expand='md'>
        <NavbarBrand href='/'>
          <img src={Logo} alt='Logo' />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto ml-auto px-md-5' navbar>
            <NavItem className='mr-4'>
              <NavLink className='font-weight-bold' href='/components/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem className='mr-4'>
              <NavLink className='font-weight-bold' href='/components/'>
                Events
              </NavLink>
            </NavItem>
            <NavItem className='mr-4'>
              <NavLink className='font-weight-bold' href='/components/'>
                Features
              </NavLink>
            </NavItem>
            <NavItem className='mr-4'>
              <NavLink className='font-weight-bold' href='/'>
                Pricing
              </NavLink>
            </NavItem>
          </Nav>
          <Button
            className='mr-2 font-weight-bold'
            outline
            color='primary'
            size='sm'
          >
            Sign in
          </Button>
          <Button color='primary' size='sm'>
            Get started <i className='fas fa-angle-right'></i>
          </Button>
        </Collapse>
      </Navmenu>
    </Container>
  );
};

export default Navbar;
