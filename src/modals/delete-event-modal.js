import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

import useModal from "../common/hooks/use-modal";
import { MODAL } from "../common/constants";
import { deleteEvent } from "../common/actions/events";
import { useDispatch } from "react-redux";

const DeleteEvent = () => {
  const { isOpen, toggle, onOpened, onClosed, params } = useModal(
    MODAL.EXAMPLE
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteEvent(params.id));
    toggle();
  };
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      onOpened={onOpened}
      onClosed={onClosed}
      size="lg"
    >
      <ModalHeader toggle={toggle}>Delete Event</ModalHeader>
      <ModalBody>Are you sure to delete this event?</ModalBody>
      <ModalFooter>
        <Button color="primary" size="sm" onClick={handleClick}>
          Delete
        </Button>
        <Button color="link" size="sm" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteEvent;
