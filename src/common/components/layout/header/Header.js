import React from "react";
import { Button, Container, Col, Row } from "reactstrap";
import "./Header.scss";
import Pattern from "../../../img/svg/pattern.svg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md="5" className="mt-4">
          <h2 className="featurette-heading">
            Create <span className="text-muted">beautiful events</span> for your
            clients.
          </h2>
          <p className="mt-3">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
          {/* <Button color='primary'>
            <strong>Create Your Event</strong>
            <i className='fas fa-chevron-right pl-3'></i>
          </Button> */}
          <motion.button
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1 }}
            className="btn btn-primary"
          >
            <strong>Create Your Event</strong>
            <i className="fas fa-chevron-right pl-3"></i>
          </motion.button>
        </Col>
        <Col md="7" className="pt-5">
          <img src={Pattern} width="100%" alt="Pattern" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
