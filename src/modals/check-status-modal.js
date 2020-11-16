import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useSelector } from "react-redux";

import useModal from "../common/hooks/use-modal";
import { MODAL } from "../common/constants";
import { getParticipantStatus } from "../common/selectors/events-selector";

import Confetti from "react-confetti";

// declined i4rNFYJiG accepted lnytxY8o8
const accepted = <h5>Congratulations!!! You are accepted for Event!</h5>;
const declined = <h5>Sorry, your status is: declined :(</h5>;
const pending = <h5>Your status is: pending</h5>;

const getStatusText = (param) => {
  switch (param) {
    case "accepted":
      return accepted;

    case "declined":
      return declined;

    default:
      return pending;
  }
};

const CheckStatusModal = () => {
  const { isOpen, toggle, onOpened, onClosed, params } = useModal(
    MODAL.CHECK_STATUS
  );
  const height = document.body.clientHeight;
  const ref = useRef(null);

  const [numberOfPiecesState, setNumberOfPiecesState] = useState(0);

  const participant = useSelector(getParticipantStatus);

  useEffect(() => {
    participant.status === "accepted"
      ? setNumberOfPiecesState(1000)
      : setNumberOfPiecesState(0);
  }, [participant]);

  return (
    <div ref={ref} className="confetti-modal">
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        onOpened={onOpened}
        onClosed={onClosed}
        size="lg"
      >
        <ModalHeader toggle={toggle}>Event status</ModalHeader>
        <ModalBody>{getStatusText(params.status)}</ModalBody>
        <ModalFooter>
          <Button color="primary" size="sm" onClick={toggle}>
            Ok
          </Button>
          <Button color="link" size="sm" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {ref?.current?.clientWidth !== 0 && isOpen && (
        <Confetti
          width={ref?.current?.clientWidth}
          height={height}
          numberOfPieces={numberOfPiecesState}
          recycle={false}
        />
      )}
    </div>
  );
};

export default CheckStatusModal;
