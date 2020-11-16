import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

import useModal from "../common/hooks/use-modal";
import { MODAL } from "../common/constants";
import { useDispatch } from "react-redux";
import { setNotification } from "../common/actions/notification";

const RegisterOnEvent = () => {
  const { isOpen, toggle, onOpened, onClosed, params } = useModal(
    MODAL.REGISTER_ON_EVENT
  );

  const dispatch = useDispatch();

  function copyCode() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    // alert("Copied the text: " + copyText.value);
    dispatch(setNotification("Code copied", "success"));
  }

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      onOpened={onOpened}
      onClosed={onClosed}
      size="lg"
    >
      <ModalHeader toggle={toggle}>Registration on Event</ModalHeader>
      <ModalBody>
        <h4>Your registration code(save it):</h4> <hr />
        <h5>
          <input type="text" value={params} id="myInput"></input>
        </h5>
        <Button onClick={copyCode} size="sm">
          Copy code
        </Button>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" size="sm" onClick={toggle}>
          Ok
        </Button>
        <Button color="link" size="sm" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default RegisterOnEvent;
