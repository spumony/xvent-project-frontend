import React from "react";
import { getCurrentProfile } from "../../actions/profile";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../layout/Navbar";
import { Button, Col, Container, Row } from "reactstrap";
import Empty from "../../img/svg/empty-profile.svg";

const Profile = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  return (
    <div className="bg-light vh-100">
      <Navbar />
      <Container>
        <Row className="mt-5">
          <Col>
            {profile !== null ? (
              <>
                <Container>
                  <h5>Profile page:</h5>
                  <Row className="mt-3">
                    <Col lg={12}>
                      <h4>{profile && profile.user.name}</h4>
                    </Col>
                    <Col lg={12}>
                      <h6>Company: {profile && profile.company}</h6>
                    </Col>
                    <Col lg={12}>
                      <h6>Website: {profile && profile.website}</h6>
                    </Col>
                    <Col lg={12}>
                      <h6>Location: {profile && profile.location}</h6>
                    </Col>
                    <Col lg={12}>
                      <h6>Status: {profile && profile.status}</h6>
                    </Col>
                    <Col lg={12}>
                      <h6>Bio: {profile && profile.bio}</h6>
                    </Col>
                    <Col lg={12}>
                      {profile && (
                        <>{/* <h6>Interests:{profile.interests}</h6> */}</>
                      )}
                    </Col>
                    {/* <Col lg={12}>
                      <h6>Youtube: {profile && profile.social && profile.social.youtube}</h6>
                    </Col>
                    <Col lg={12}>
                      <h6>Facebook: {profile && profile.social.facebook}</h6>
                    </Col>
                    <Col lg={12}>
                      <h6>Twitter: {profile && profile.social.twitter}</h6>
                    </Col>
                    <Col lg={12}>
                      <h6>Linkedin: {profile && profile.social.linkedin}</h6>
                    </Col>
                    <Col lg={12}>
                      <h6>Instagram: {profile && profile.social.instagram}</h6>
                    </Col> */}
                  </Row>
                  <Row>
                    <Col>
                      <Link to="/edit-profile">
                        <Button>Edit Profile</Button>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </>
            ) : (
              <>
                <img className="mb-3" src={Empty} width="500" alt="img" />
                <h5 className="">
                  You have not yet setup a profile, please add some info
                </h5>
                <Link to="/create-profile" className="btn btn-primary my-1">
                  Create Profile
                </Link>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
