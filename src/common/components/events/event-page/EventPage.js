import React, { useEffect } from "react";
import Navbar from "../../layout/Navbar";
import EventSlider from "../../events/event-slider/EventSlider";
import EventMenu from "../../events/event-menu/EventMenu";
import EventList from "../event-list/EventList";
import { Container, Spinner } from "reactstrap";

import { getAllEvents } from "../../../actions/events";
import { useDispatch, useSelector } from "react-redux";
import {
  getEventSelector,
  getEventsLoadingSelector,
} from "../../../selectors/events-selector";

const Events = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getEventsLoadingSelector);

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  return loading ? (
    <Spinner></Spinner>
  ) : (
    <>
      <Navbar />
      <br />
      <EventSlider />
      <EventMenu />
      <Container>
        <EventList />
      </Container>
    </>
  );
};

export default Events;
