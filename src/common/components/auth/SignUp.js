import React from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registration } from "../../actions/auth";
import PropTypes from "prop-types";

import { Input, Button, Label, Form, Container, Row, Col } from "reactstrap";
import "./SignInUp.scss";

import Logo from "./../../img/svg/logo.svg";

const SignUp = ({ registration, isAuthenticated }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = ({ name, email, password }) => {
    registration({ name, email, password });
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="sign-in">
      <Container>
        <Row>
          <Col>
            <div className="mx-auto sign-in-card col-12 col-md-6 col-lg-4 p-5 text-left">
              <Link to="/">
                <img
                  className="mx-auto d-block mb-5"
                  width="100px"
                  src={Logo}
                  alt="Logo"
                />
              </Link>
              <h4 className="font-weight-bold text-center mb-5">
                Welcome back
              </h4>

              <Form
                onSubmit={handleSubmit(onSubmit)}
                className="pad mb-2 mr-sm-2 mb-sm-0 pb-3"
              >
                <Label for="email" className="mr-sm-2 font-weight-bold">
                  Email
                </Label>
                <Input
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  innerRef={register({
                    required: true,
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Incorrect email",
                    },
                  })}
                />
                {errors.email && (
                  <h6 className="mt-2 mb-2 text-muted" role="alert">
                    {errors.email.message}
                  </h6>
                )}

                <Label for="name" className="mt-3 mr-sm-2 font-weight-bold">
                  Name
                </Label>
                <Input
                  name="name"
                  id="name"
                  placeholder="John"
                  innerRef={register({
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                    message: "Name must contains minimum 2 letters",
                  })}
                />
                {errors.name && (
                  <h6 className="mt-2 mb-2 text-muted" role="alert">
                    {errors.name.message}
                  </h6>
                )}

                <Label for="password" className="mt-3 mr-sm-2 font-weight-bold">
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  innerRef={register({
                    max: 30,
                    min: 6,
                    maxLength: 30,
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i,
                      message: "Minimum 6 symbols and 1 letter",
                    },
                  })}
                />
                {errors.password && (
                  <h6 className="mt-2 mb-2 text-muted" role="alert">
                    {errors.password.message}
                  </h6>
                )}
                <Button type="submit" color="primary" block className="mt-4">
                  Create Your Account
                </Button>
              </Form>
            </div>
            <div className="mx-auto sign-in-card-footer col-12 col-md-6 col-lg-4 text-center">
              <span>By using Xvent you agree to our terms and policy.</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

SignUp.propTypes = {
  registration: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { registration })(SignUp);
