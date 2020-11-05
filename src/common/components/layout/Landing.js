import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import { Container } from "reactstrap";
import { Redirect } from "react-router-dom";

const isLoggedSelector = (state) => state.auth.isAuthenticated || false;

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Navbar />
      Landing
    </Container>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: isLoggedSelector(state),
});

export default connect(mapStateToProps)(Landing);
