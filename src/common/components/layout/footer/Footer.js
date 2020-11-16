import React from "react";
import { Container, Button, Row, Col } from "reactstrap";
import "./Footer.scss";

import Pattern from "../../../img/svg/footer-pattern.svg";
import Logo from "../../../img/svg/logo.svg";

const Footer = () => {
  return (
    <Container fluid className="footer2-s1">
      <Row className="d-flex justify-content-center">
        <Col className="footer2-s2 pl-5 pr-5" lg="6" md="12" sm="12">
          <img
            className="mx-auto d-block mt-4"
            width="60px"
            src={Pattern}
            alt="Logo"
          />
          <h4 className="mt-4 font-weight-bold">
            Create unlimited events in seconds.
          </h4>
          <h4 className="font-weight-bold">Try it now, it's so easy.</h4>
          <h6 className="mt-4 font-weight-lighter">
            The easiest way to brand your business in a unique way
          </h6>
          <Button className="mt-4 mb-5 font-weight-bold" color="dorian">
            Join Xvent Creator Now!
          </Button>
        </Col>
      </Row>
      <Row className="text-center pb-5">
        <Col lg="5" sm="12">
          <img src={Logo} width="100px" alt="Logo" />
        </Col>
        <Col></Col>
        <Col lg="5" sm="12">
          <h6>
            <strong>Xvent.</strong> Made by <strong>ciumac.dev</strong>{" "}
            Copyright ©2020
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
