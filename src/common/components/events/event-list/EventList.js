import React from "react";
import { useSelector } from "react-redux";
import { CardColumns } from "reactstrap";

import { getEventsSelector } from "../../../selectors/events-selector";

import EventCard from "../event-card/EventCard";

const EventList = ({ user }) => {
  const events = useSelector(getEventsSelector);
  return (
    <CardColumns>
      {events.map((event, index) => (
        <EventCard key={index} event={event} user={user} />
      ))}
    </CardColumns>
  );
};

export default EventList;
