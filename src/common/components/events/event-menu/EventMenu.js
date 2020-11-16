import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  NavLink,
  Container,
} from "reactstrap";
import "./EventMenu.scss";

const EventMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className="mt-3" light expand="md">
      <Container>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="eventmenu-active" href="#">
                <span className="eventmenu-active">Concert</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Party</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Film</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem>
              <NavLink href="#">
                <span className="eventmenu-active">Today</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Tomorrow</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Weekend</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default EventMenu;
