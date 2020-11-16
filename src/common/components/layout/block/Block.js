import React from "react";
import {
  Button,
  Container,
  Col,
  Row,
  InputGroup,
  Input,
  InputGroupAddon,
} from "reactstrap";
import Pattern from "../../../img/svg/undraw_2p66.svg";
import Search from "../../../img/svg/searching_p5ux.svg";

const Block1 = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md="7" className="pt-5">
            <img src={Pattern} width="100%" alt="Pattern" />
          </Col>
          <Col md="5" className="mt-5">
            <h2 className="featurette-heading">
              Schedule your <span className="text-muted">events</span> with us.
            </h2>
            <p className="mt-3">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
            <Button color="primary">
              <strong>Create Your Event</strong>
              <i className="fas fa-chevron-right pl-3"></i>
            </Button>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col md="6" className="mt-4">
            <h2 className="featurette-heading">
              Check your event <span className="text-muted">status</span>
            </h2>
            <p className="mt-3">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper.
            </p>
            <InputGroup>
              <Input placeholder="Your code here.." />
              <InputGroupAddon addonType="append">
                <Button color="primary">To the Right!</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>{" "}
          <Col md="6" className="pt-5">
            <img src={Search} width="100%" alt="Pattern" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Block1;
