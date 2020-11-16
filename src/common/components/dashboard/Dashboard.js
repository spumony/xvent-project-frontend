import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "../layout/Navbar";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { getCurrentEvents } from "../../actions/events";
import Spinner from "../layout/Spinner";
import Logo from "../../img/svg/welcome-logo.svg";
import "./Dashboard.scss";
import { Container, Row, Col, Button } from "reactstrap";
import EventList from "../events/event-list/EventList";

const getEventSelector = (state) => state.events || {};

const Dashboard = ({
  getCurrentProfile,
  getCurrentEvents,
  auth: { user },
  profile: { profile, loading },
  events,
}) => {
  useEffect(() => {
    getCurrentProfile();
    getCurrentEvents();
  }, [getCurrentProfile, getCurrentEvents]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <>
      <div className="bg-light vh-100">
        <Navbar />
        <Container className="mt-5">
          <Row className="dashboard-welcome mt-5">
            <Col md="2">
              <img className="mt-4 ml-2" width="210%" src={Logo} alt="Logo" />
            </Col>
            <Col className="mt-4" md="10">
              <h5 className="ml-4 text-light">Hello, {user && user.name}</h5>
              <h6 className="ml-4 text-light font-weight-light">
                Welcome back to Xvent
              </h6>
            </Col>
          </Row>


          <Row className="mt-5">
            <Col>
              <span className="font-weight-bold dashboard-my-event mr-5">
                My Events
              </span>


              <Link to="/events/create-event">
                <Button color="primary" size="sm">
                  <i className="fas fa-plus pr-2"></i>
                  <strong>Create New</strong>
                </Button>
              </Link>
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <EventList user={user} />
          </Row>
        </Container>
      </div>
    </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getCurrentEvents: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  events: getEventSelector(state),
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  getCurrentEvents,
})(Dashboard);
