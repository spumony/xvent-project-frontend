import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import Navbar from "../../layout/Navbar";
import { createEvent } from "../../../actions/events";
import {
  Input,
  Label,
  Form,
  Button,
  Container,
  Row,
  Col,
  FormGroup,
} from "reactstrap";

const CreateEvent = ({ createEvent, history }) => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
    createEvent(data, history);
  };

  return (
    <div>
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
        <Row className="mt-2">
          <Col>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="pad mb-2 mr-sm-2 mb-sm-0 pb-3"
            >
              <Label for="title" className="mt-3 mr-sm-2 font-weight-bold">
                Title
              </Label>
              <Input
                placeholder="Event Title"
                name="title"
                innerRef={register}
              />
              {errors.title && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.title.message}
                </h6>
              )}

              <Label
                for="description"
                className="mt-3 mr-sm-2 font-weight-bold"
              >
                Description
              </Label>
              <Input
                placeholder="Event description"
                name="description"
                innerRef={register}
              />
              {errors.description && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.description.message}
                </h6>
              )}

              <Label for="location" className="mt-3 mr-sm-2 font-weight-bold">
                Location
              </Label>
              <Input
                placeholder="Event location"
                name="location"
                innerRef={register}
              />
              {errors.location && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.location.message}
                </h6>
              )}

              <Label for="website" className="mt-3 mr-sm-2 font-weight-bold">
                Website
              </Label>
              <Input
                placeholder="Event website"
                name="website"
                innerRef={register}
              />
              {errors.website && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.website.message}
                </h6>
              )}

              <Label for="type" className="mt-3 mr-sm-2 font-weight-bold">
                Type
              </Label>

              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="type"
                    value="type1"
                    innerRef={register}
                  />
                  Party
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="type"
                    value="type2"
                    innerRef={register}
                  />
                  Concert
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="type"
                    value="type3"
                    innerRef={register}
                  />
                  Film
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="type"
                    value="type4"
                    innerRef={register}
                  />
                  Theatre
                </Label>
              </FormGroup>

              <Label for="type" className="mt-3 mr-sm-2 font-weight-bold">
                Date
              </Label>
              <FormGroup>
                <Input
                  type="date"
                  name="dateStart"
                  id="dateStart"
                  placeholder="date placeholder"
                  innerRef={register}
                />
              </FormGroup>
              {errors.type && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.type.message}
                </h6>
              )}
              <Label for="type" className="mt-3 mr-sm-2 font-weight-bold">
                Time
              </Label>
              <FormGroup>
                <Input
                  type="time"
                  name="time"
                  id="time"
                  placeholder="date placeholder"
                  innerRef={register}
                />
              </FormGroup>
              {errors.type && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.type.message}
                </h6>
              )}

              <Label for="location" className="mt-3 mr-sm-2 font-weight-bold">
                Image link
              </Label>
              <Input
                placeholder="Image link"
                name="image"
                innerRef={register}
              />
              {errors.location && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.location.message}
                </h6>
              )}

              <Button type="submit" color="primary" block className="mt-4">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

CreateEvent.propTypes = {
  createEvent: PropTypes.func.isRequired,
};

export default connect(null, { createEvent })(withRouter(CreateEvent));
