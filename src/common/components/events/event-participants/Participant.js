import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { editParticipantStatus } from "../../../actions/events";

const Participant = ({ participant, position, paramsId }) => {
  const dispatch = useDispatch();

  const dataAccepted = {
    status: "accepted",
    shortId: participant.shortId,
  };
  const dataDeclined = {
    status: "declined",
    shortId: participant.shortId,
  };

  const handleClickAccepted = (e) => {
    e.preventDefault();
    dispatch(editParticipantStatus(dataAccepted, paramsId));
  };
  const handleClickDeclined = (e) => {
    e.preventDefault();
    dispatch(editParticipantStatus(dataDeclined, paramsId));
  };

  return (
    <tr>
      <th scope="row">{position + 1}</th>
      <td>{participant.name}</td>
      <td>{participant.phone}</td>
      <td>{participant.status}</td>
      <td>{participant.shortId}</td>
      <td>
        <Button
          onClick={handleClickAccepted}
          className="mr-1 font-weight-bold"
          color="primary"
          size="sm"
        >
          Accept
        </Button>
        <Button
          onClick={handleClickDeclined}
          className="mr-1 font-weight-bold"
          color="pink"
          size="sm"
        >
          Decline
        </Button>
      </td>
    </tr>
  );
};

export default Participant;
