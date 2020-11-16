import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import DeleteEvent from "../../../modals/delete-event-modal";
import { useDispatch } from "react-redux";
import { openModal } from "../../actions/modal-actions";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const Modal = () => {
  const [numberOfPiecesState, setnumberOfPiecesState] = useState(0);

  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    // dispatch(openModal("example", { id: "12345" }))
    
  }

  const { width, height } = useWindowSize();

  // setTimeout(() => {
  //   setnumberOfPiecesState = 0;
  // }, 3000);

  return (
    // <Container>
    //   <Row className="mt-5">
    //     <Col>
    //       <h3>Modal Example</h3>
    //       <Button onClick={handleClick}>Open modal</Button>

    //       <DeleteEvent />

    //     </Col>
    //   </Row>
    // </Container>
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={numberOfPiecesState}
        recycle="true"
        run="false"
      />
      <button onClick={() => setnumberOfPiecesState(500)}>Stop</button>
    </>
  );
};

export default Modal;
