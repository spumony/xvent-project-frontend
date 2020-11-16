import React, { useEffect } from "react";
import useExtendedSelector from "../../../hooks/use-extended-selector";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  checkParticipantStatus,
  getEvent,
  registerOnEvent,
} from "../../../actions/events";
import {
  getEventSelector,
  getEventsLoadingSelector,
} from "../../../selectors/events-selector";
import Moment from "react-moment";

import {
  Col,
  Container,
  Row,
  Button,
  FormGroup,
  Input,
  Badge,
  Spinner,
  Form,
} from "reactstrap";
import "./SingleEvent.scss";
// import Pattern from "../../../img/svg/undraw_2p66.svg";
import Slide2 from "../../../img/jpg/6e26.jpg";
// import GoogleMap from "./GoogleMap";
import Navbar from "../../layout/Navbar";
import { useForm } from "react-hook-form";
import { openModal } from "../../../actions/modal-actions";

const SingleEvent = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(getEventsLoadingSelector);
  const event = useExtendedSelector(getEventSelector, { id: params.id });

  const { image = Slide2 } = event;

  const { handleSubmit, register, errors } = useForm();

  useEffect(() => {
    dispatch(getEvent(params.id));
  }, []);

  const registerButtonHandler = (data) => {
    dispatch(
      registerOnEvent(params.id, { name: data.name, phone: data.phone })
    );
    console.log(params.id, { name: data.name, phone: data.phone });
  };

  const checkStatusButtonHandler = (data) => {
    dispatch(checkParticipantStatus({ shortId: data.code }));
  };

  return loading ? (
    <Spinner></Spinner>
  ) : (
    <>
      <Navbar />
      <div className="mt-4">
        <Link to="/events">
          <Button color="link">
            <i className="fas fa-long-arrow-alt-left pr-2"></i>
            <strong>Back</strong>
          </Button>
        </Link>

        <img className="single-event-img" width="100%" src={image} />

        <Container>
          <Row className="d-flex justify-content-between">
            <Col md="7">
              <h2 className="single-event-heading">{event.title}</h2>
              <p className="mt-3 single-event-text">{event.description}</p>
            </Col>
            <Col md="4" className="mt-5 p-4 single-event-register">
              <h5 className="mb-2 font-weight-bold">Date & Time</h5>
              <h6 className="mb-3 text-muted font-weight-bold">
                <Moment format="dddd, MMMM DD">{event.dateStart}</Moment> at{" "}
                {event.time}
              </h6>
              <Form onSubmit={handleSubmit(registerButtonHandler)}>
                <Input
                  className="mt-3 mb-2"
                  placeholder="default"
                  type="text"
                  name="name"
                  placeholder="Name"
                  innerRef={register}
                />
                {errors.name && (
                  <h6 className="mt-3 mb-2 text-muted" role="alert">
                    {errors.name.message}
                  </h6>
                )}

                <Input
                  className="mt-3 mb-2"
                  placeholder="default"
                  type="phone"
                  name="phone"
                  placeholder="Phone"
                  innerRef={register}
                />
                {errors.phone && (
                  <h6 className="mt-3 mb-2 text-muted" role="alert">
                    {errors.phone.message}
                  </h6>
                )}

                <Button color="primary" block>
                  Register
                </Button>
              </Form>
              <hr />
              <h5 className="mb-1 font-weight-bold">Check status</h5>
              <Form onSubmit={handleSubmit(checkStatusButtonHandler)}>
                <Input
                  className="mt-3 mb-2"
                  placeholder="default"
                  type="text"
                  name="code"
                  placeholder="Code"
                  innerRef={register}
                />
                {errors.code && (
                  <h6 className="mt-3 mb-2 text-muted" role="alert">
                    {errors.code.message}
                  </h6>
                )}

                <Button color="primary" outline block>
                  Check status
                </Button>
              </Form>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between">
            <Col md="7">
              <h5 className="pt-3 mb-2 font-weight-bold">Program: </h5>
              <h5 className="pt-3 mb-2 font-weight-bold">Website:</h5>{" "}
              <h6 className="mb-3 pt-2 text-muted font-weight-bold">
                <a href={event.website} target="_blank">
                  {event.website}
                </a>
              </h6>
              <h5 className="pt-3 mb-2 font-weight-bold">
                How can I contact the organizer with any questions?
              </h5>
              <p className="mt-3 single-event-text">
                You can contact the organizer with this email adress{" "}
                <strong>email@gmail.com</strong>
              </p>
            </Col>
            <Col md="4">
              <h5 className="pt-5 mb-3 font-weight-bold">Event Location</h5>

              {/* <GoogleMap /> */}

              <h6 className="mt-3 font-weight-bold">{event.location}</h6>

              <h5 className="pt-5 mb-2 font-weight-bold">Tags</h5>
              <Badge className="mr-2 mb-2" color="secondary">
                Concert
              </Badge>
              <Badge className="mr-2 mb-2" color="secondary">
                Singer
              </Badge>
              <Badge className="mr-2 mb-2" color="secondary">
                Chisinau
              </Badge>
              <Badge className="mr-2 mb-2" color="secondary">
                Live
              </Badge>
              <Badge className="mr-2 mb-2" color="secondary">
                Music
              </Badge>

              <h5 className="pt-5 mb-2">Share with friends</h5>
              <a href="#fb">
                <i className="pr-2 single-event-facebook fab fa-facebook-square"></i>
              </a>
              <a href="#tw">
                <i className="pr-2 single-event-twitter fab fa-twitter-square"></i>
              </a>
              <a href="#lk">
                <i className="single-event-linkedin fab fa-linkedin"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SingleEvent;
