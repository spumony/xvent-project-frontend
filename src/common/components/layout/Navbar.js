import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";
import Logo from "../../img/svg/logo.svg";

import {
  Collapse,
  Navbar as Navmenu,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";

const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const authLinks = (
    <Navmenu className="pt-4" color="transparent" light expand="md">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto ml-auto px-md-5" navbar></Nav>
        <Nav navbar>
          <Link
            className="nav-link text-decoration-none text-oxford font-weight-bolder"
            to="/dashboard"
          >
            <NavItem className="mr-4">Dashboard</NavItem>
          </Link>

          <UncontrolledDropdown
            className="mr-4 text-decoration-none text-oxford font-weight-bold"
            nav
            inNavbar
          >
            <DropdownToggle nav caret>
              {user && user.name}
            </DropdownToggle>
            <DropdownMenu right>
              <Link
                to="/profile"
                className="text-decoration-none text-oxford font-weight-bold"
              >
                <DropdownItem>Profile</DropdownItem>
              </Link>

              <DropdownItem>Send Feedback</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={logout}>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <h5>
          <Badge className="mt-2 mr-4" color="primary">
            Basic
          </Badge>
        </h5>
        <Button
          className="mr-2 font-weight-bold"
          outline
          color="primary"
          size="sm"
        >
          Upgrade
        </Button>
      </Collapse>
    </Navmenu>
  );

  const guestLinks = (
    <Navmenu className="pt-4" color="transparent" light expand="md">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto ml-auto px-md-5" navbar>
          <NavItem className="mr-4">
            <Link
              to="/"
              className="text-decoration-none text-oxford font-weight-bold"
            >
              Home
            </Link>
          </NavItem>
          <NavItem className="mr-4">
            <Link
              to="/events"
              className="text-decoration-none text-oxford font-weight-bold"
            >
              Events
            </Link>
          </NavItem>
          <NavItem className="mr-4">
            <Link
              to="/features"
              className="text-decoration-none text-oxford font-weight-bold"
            >
              Features
            </Link>
          </NavItem>
          <NavItem className="mr-4">
            <Link
              to="/pricing"
              className="text-decoration-none text-oxford font-weight-bold"
            >
              Pricing
            </Link>
          </NavItem>
        </Nav>
        <Link to="/signin">
          <Button
            className="mr-2 font-weight-bold"
            outline
            color="primary"
            size="sm"
          >
            Sign in
          </Button>
        </Link>
        <Link to="/signup">
          <Button color="primary" size="sm">
            Get started <i className="fas fa-angle-right"></i>
          </Button>
        </Link>
      </Collapse>
    </Navmenu>
  );

  return (
    <Container>
      <>{isAuthenticated ? authLinks : guestLinks}</>
    </Container>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
