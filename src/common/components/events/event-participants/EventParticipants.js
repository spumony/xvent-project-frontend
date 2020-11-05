import React, { useEffect } from "react";
import useExtendedSelector from "../../../hooks/use-extended-selector";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getEvent } from "../../../actions/events";
import {
  getEventSelector,
  getEventsLoadingSelector,
} from "../../../selectors/events-selector";
import Navbar from "../../layout/Navbar";

import { Spinner, Row, Col, Button, Table, Container } from "reactstrap";
import Participant from "./Participant";

const EventParticipants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(getEventsLoadingSelector);
  const event = useExtendedSelector(getEventSelector, { id: params.id });

  useEffect(() => {
    dispatch(getEvent(params.id));
  }, []);

  return loading ? (
    <Spinner></Spinner>
  ) : (
    <>
      <Navbar />
      <Col className="mt-3">
        <Link to="/">
          <Button color="link">
            <i className="fas fa-long-arrow-alt-left pr-2"></i>
            <strong>Back</strong>
          </Button>
        </Link>
      </Col>

      <Container>
        <Row>
          <Col>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Phone number</th>
                  <th>Status</th>
                  <th>ShortId</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {event.participants.map((participant, index) => (
                  <Participant
                    key={index}
                    participant={participant}
                    position={index}
                    paramsId={params.id}
                  />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EventParticipants;
