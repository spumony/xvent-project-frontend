import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import { Redirect } from "react-router-dom";
import Header from "./header/Header";
import Block from "./block/Block";
import Footer from "./footer/Footer";
import SingleEvent from "../events/single-event/SingleEvent";

const isLoggedSelector = (state) => state.auth.isAuthenticated || false;

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Navbar />
      <Header />
      <Block />
      <Footer />
    </>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: isLoggedSelector(state),
});

export default connect(mapStateToProps)(Landing);
