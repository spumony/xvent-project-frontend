import axios from "axios";
import { openModal } from "./modal-actions";
import { setNotification } from "./notification";

import {
  GET_EVENTS,
  GET_ALL_EVENTS,
  CHECK_PARTICIPANT_STATUS,
  EVENTS_ERROR,
  CREATE_EVENT,
  EVENT,
  EDIT_PARTICIPANT_STATUS_ERROR,
  EDIT_PARTICIPANT_STATUS_SUCCESS,
  REGISTER_ON_EVENT,
} from "./types";

// Get all events
export const getAllEvents = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/events");

    dispatch({
      type: GET_ALL_EVENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get current users events
export const getCurrentEvents = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/events/m");

    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get users event
export const getEvent = (id) => async (dispatch) => {
  dispatch({
    type: EVENT.GET,
    payload: { id },
  });
  try {
    const res = await axios.get(`/api/events/id/${id}`);

    dispatch({
      type: EVENT.GET_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENT.GET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create event
export const createEvent = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/events/create-event", formData, config);

    dispatch({
      type: CREATE_EVENT,
      payload: res.data,
    });

    dispatch(setNotification("Event Created", "success"));

    history.push("/dashboard");
  } catch (err) {
    console.log(err.response);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setNotification(error.msg, "warn")));
    }

    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Check participant status
export const checkParticipantStatus = (shortId) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/events/status", shortId, config);

    dispatch({
      type: CHECK_PARTICIPANT_STATUS,
      payload: res.data,
    });

    dispatch(openModal("check-status", res.data));
  } catch (err) {
    console.log(err.response);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setNotification(error.msg, "warn")));
    }

    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Register on event
export const registerOnEvent = (id, participant) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(`/api/events/id/${id}`, participant, config);

    dispatch({
      type: REGISTER_ON_EVENT,
      payload: res.data,
    });

    dispatch(openModal("register-on-event", res.data));
  } catch (err) {
    console.log(err.response);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setNotification(error.msg, "warn")));
    }

    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update event
export const editEvent = (formData, history, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(`/api/events/id/${id}`, formData, config);

    dispatch({
      type: EVENT.EDIT_SUCCESS,
      payload: res.data,
    });

    dispatch(setNotification("Event Updated", "success"));

    history.push("/dashboard");
  } catch (err) {
    console.log(err.response);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setNotification(error.msg, "warn")));
    }

    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update participant status
export const editParticipantStatus = (data, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      `/api/events/id/${id}/participants`,
      data,
      config
    );

    dispatch({
      type: EDIT_PARTICIPANT_STATUS_SUCCESS,
      payload: res.data,
    });

    dispatch(setNotification("Status changed", "success"));
  } catch (err) {
    console.log(err.response);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setNotification(error.msg, "warn")));
    }

    dispatch({
      type: EDIT_PARTICIPANT_STATUS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete event
export const deleteEvent = (id) => async (dispatch) => {
  dispatch({
    type: EVENT.DELETE,
    payload: { id },
  });
  try {
    await axios.delete(`/api/events/id/${id}`);

    dispatch({
      type: EVENT.DELETE_SUCCESS,
      payload: { id },
    });
  } catch (err) {
    dispatch({
      type: EVENT.DELETE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
