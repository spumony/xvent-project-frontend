import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import Navbar from "../../layout/Navbar";
import { motion } from "framer-motion";
import { createProfile, getCurrentProfile } from "../../../actions/profile";
import {
  Input,
  Label,
  Form,
  Button,
  Container,
  Row,
  Col,
  CustomInput,
} from "reactstrap";

const getProfileSelector = (state) => state?.profile?.profile || {};
const getProfileIsLoadingSelector = (state) => state.profile.loading;

const EditProfile = ({
  profile,
  loading,
  createProfile,
  history,
  getCurrentProfile,
}) => {
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();
  }, [loading, getCurrentProfile]);

  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      company: profile.company,
      website: profile.website,
      location: profile.location,
      status: profile.status,
      bio: profile.bio,
      youtube: profile?.social?.youtube,
      twitter: profile?.social?.twitter,
      facebook: profile?.social?.facebook,
      instagram: profile?.social?.instagram,
      linkedin: profile?.social?.linkedin,
      type1: profile?.types?.type1,
      type2: profile?.types?.type2,
      type3: profile?.types?.type3,
      type4: profile?.types?.type4,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    createProfile(data, history, true);
  };

  return (
    <div>
      <Navbar />
      <Col className="mt-3">
        <Link to="/profile">
          <Button color="link">
            <i className="fas fa-long-arrow-alt-left pr-2"></i>
            <strong>Back</strong>
          </Button>
        </Link>
      </Col>
      <Container>
        <Row className="mt-2">
          <Col>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="pad mb-2 mr-sm-2 mb-sm-0 pb-3"
            >
              <Label for="company" className="mt-3 mr-sm-2 font-weight-bold">
                Company
              </Label>
              <Input
                placeholder="Your company"
                name="company"
                innerRef={register}
              />
              {errors.company && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.company.message}
                </h6>
              )}

              <Label for="website" className="mt-3 mr-sm-2 font-weight-bold">
                Website
              </Label>
              <Input
                placeholder="Your website"
                name="website"
                innerRef={register}
              />
              {errors.website && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.website.message}
                </h6>
              )}

              <Label for="location" className="mt-3 mr-sm-2 font-weight-bold">
                Location
              </Label>
              <Input
                placeholder="Your location"
                name="location"
                innerRef={register}
              />
              {errors.location && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.location.message}
                </h6>
              )}

              <Label for="status" className="mt-3 mr-sm-2 font-weight-bold">
                Status
              </Label>
              <Input
                placeholder="Your status"
                name="status"
                innerRef={register}
              />
              {errors.status && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.status.message}
                </h6>
              )}

              <Label for="bio" className="mt-3 mr-sm-2 font-weight-bold">
                Bio
              </Label>
              <Input placeholder="About you" name="bio" innerRef={register} />
              {errors.bio && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.bio.message}
                </h6>
              )}

              <Label for="interests" className="mt-3 mr-sm-2 font-weight-bold">
                Intrests
              </Label>
              <Row>
                <Col>
                  <CustomInput
                    type="checkbox"
                    name="type1"
                    id="type1"
                    label="Party"
                    innerRef={register}
                  />
                  <CustomInput
                    type="checkbox"
                    name="type2"
                    id="type2"
                    label="Theatre"
                    innerRef={register}
                  />
                </Col>
                <Col>
                  <CustomInput
                    type="checkbox"
                    name="type3"
                    id="type3"
                    label="Cinema"
                    innerRef={register}
                  />
                  <CustomInput
                    type="checkbox"
                    name="type4"
                    id="type4"
                    label="Concert"
                    innerRef={register}
                  />
                </Col>
              </Row>
              {errors.interests && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.interests.message}
                </h6>
              )}

              <Button
                onClick={() => toggleSocialInputs(!displaySocialInputs)}
                color="lavender"
                className="mt-4"
              >
                Social links{" "}
                {displaySocialInputs ? (
                  <i className="ml-2 fas fa-minus"></i>
                ) : (
                  <i className="ml-2 fas fa-plus"></i>
                )}
              </Button>

              {displaySocialInputs && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.1 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Label
                    for="instagram"
                    className="mt-3 mr-sm-2 font-weight-bold"
                  >
                    Instagram
                  </Label>
                  <Input
                    placeholder="Instagram link"
                    name="instagram"
                    innerRef={register}
                  />
                  {errors.instagram && (
                    <h6 className="mt-3 mb-2 text-muted" role="alert">
                      {errors.instagram.message}
                    </h6>
                  )}

                  <Label
                    for="linkedin"
                    className="mt-3 mr-sm-2 font-weight-bold"
                  >
                    Linkedin
                  </Label>
                  <Input
                    placeholder="Linkedin link"
                    name="linkedin"
                    innerRef={register}
                  />
                  {errors.linkedin && (
                    <h6 className="mt-3 mb-2 text-muted" role="alert">
                      {errors.linkedin.message}
                    </h6>
                  )}

                  <Label
                    for="youtube"
                    className="mt-3 mr-sm-2 font-weight-bold"
                  >
                    Youtube
                  </Label>
                  <Input
                    placeholder="Youtube link"
                    name="youtube"
                    innerRef={register}
                  />
                  {errors.youtube && (
                    <h6 className="mt-3 mb-2 text-muted" role="alert">
                      {errors.youtube.message}
                    </h6>
                  )}

                  <Label
                    for="facebook"
                    className="mt-3 mr-sm-2 font-weight-bold"
                  >
                    Facebook
                  </Label>
                  <Input
                    placeholder="Facebook link"
                    name="facebook"
                    innerRef={register}
                  />
                  {errors.facebook && (
                    <h6 className="mt-3 mb-2 text-muted" role="alert">
                      {errors.facebook.message}
                    </h6>
                  )}

                  <Label
                    for="twitter"
                    className="mt-3 mr-sm-2 font-weight-bold"
                  >
                    Twitter
                  </Label>
                  <Input
                    placeholder="Twitter link"
                    name="twitter"
                    innerRef={register}
                  />
                  {errors.twitter && (
                    <h6 className="mt-3 mb-2 text-muted" role="alert">
                      {errors.twitter.message}
                    </h6>
                  )}
                </motion.div>
              )}

              <Button type="submit" color="primary" block className="mt-4">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: getProfileSelector(state),
  loading: getProfileIsLoadingSelector(state),
});

const mapDispatchToProps = {
  createProfile,
  getCurrentProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditProfile));
