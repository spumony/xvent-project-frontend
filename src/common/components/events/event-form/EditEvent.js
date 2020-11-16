import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { useParams, Link } from "react-router-dom";
import { getEvent } from "../../../actions/events";
import useExtendedSelector from "../../../hooks/use-extended-selector";
import {
  getEventSelector,
  getEventsLoadingSelector,
} from "../../../selectors/events-selector";

import { useForm } from "react-hook-form";
import { editEvent } from "../../../actions/events";
import Navbar from "../../layout/Navbar";

import {
  Spinner,
  Row,
  Col,
  Container,
  Label,
  Input,
  FormGroup,
  Button,
  Form,
} from "reactstrap";

const EditEvent = ({ history }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(getEventsLoadingSelector);
  const event = useExtendedSelector(getEventSelector, { id: params.id });
  const { handleSubmit, register, errors, setValue } = useForm({
    defaultValues: {
      title: event.title,
      description: event.description,
      location: event.location,
      website: event.website,
      type: event.type,
      dateStart: event.dateStart,
      time: event.time,
      image: event.image,
    },
  });

  useEffect(() => {
    dispatch(getEvent(params.id));
  }, []);

  // TO DO: useForm default values bug(quick fix)
  useEffect(() => {
    setValue("title", event.title);
    setValue("description", event.description);
    setValue("location", event.location);
    setValue("website", event.website);
    setValue("type", event.type);
    setValue("time", event.time);
    setValue("dateStart", event.dateStart.split("T")[0]);
    setValue("image", event.image);
  }, [event]);

  const onSubmit = (data) => {
    dispatch(editEvent(data, history, params.id));
  };

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

              <Label for="dateStart" className="mt-3 mr-sm-2 font-weight-bold">
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
              {errors.dateStart && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.dateStart.message}
                </h6>
              )}

              <Label for="Time" className="mt-3 mr-sm-2 font-weight-bold">
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
              {errors.time && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.time.message}
                </h6>
              )}

              <Label for="image" className="mt-3 mr-sm-2 font-weight-bold">
                Image link
              </Label>
              <Input
                placeholder="Image link"
                name="image"
                id="image"
                innerRef={register}
              />
              {errors.image && (
                <h6 className="mt-3 mb-2 text-muted" role="alert">
                  {errors.image.message}
                </h6>
              )}

              <Button type="submit" color="primary" block className="mt-4">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditEvent;
