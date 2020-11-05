import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
  CardBody,
  Badge,
  Button,
} from "reactstrap";
import { motion } from "framer-motion";

import Mockup from "../../../img/svg/318x180.svg";
import "./EventCard.scss";
import { deleteEvent } from "../../../actions/events";

const EventCard = ({
  event: { title, description, location, time, dateStart, type, _id },
  user,
}) => {
  const dispatch = useDispatch();
  const handleEventDelete = () => {
    dispatch(deleteEvent(_id));
  };
  return (
    <Card className="mt-3 mr-3">
      <Link to="/">
        <CardImg top width="100%" src={Mockup} alt="Card image" />
      </Link>
      <CardBody>
        <CardTitle>
          <strong>{title}</strong>
        </CardTitle>
        <CardText className="event-card-desc">{location}</CardText>
        <Row>
          <Col>
            <CardText>
              <Badge color="primary" className="mr-1 mb-3">
                <small className="event-card-date">
                  <Moment format="MMMM DD">{dateStart}</Moment>
                </small>
              </Badge>
            </CardText>
          </Col>
          {user ? (
            <Col className="text-right">
              <Link to={`/events/event-participants/${_id}`}>
                <motion.i
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.4 }}
                  className="event-card-participants fas fa-user-friends"
                ></motion.i>
              </Link>
              <Link to={`/events/edit-event/${_id}`}>
                <motion.i
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.4 }}
                  className="event-card-edit fas fa-pen-square"
                ></motion.i>
              </Link>
              <Link to="#" onClick={handleEventDelete}>
                <motion.i
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.4 }}
                  className="event-card-trash fas fa-trash-alt"
                ></motion.i>
              </Link>
            </Col>
          ) : (
            <>
              <Col className="text-right">
                <Link to="/">
                  <motion.i
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.4 }}
                    className="event-card-share fas fa-paper-plane"
                  ></motion.i>
                </Link>
                <Link to="/">
                  <motion.i
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.4 }}
                    className="event-card-bookmark fas fa-heart"
                  ></motion.i>
                </Link>
              </Col>
            </>
          )}
        </Row>
      </CardBody>
    </Card>
  );
};

export default EventCard;
