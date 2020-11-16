import {
  GET_EVENTS,
  GET_ALL_EVENTS,
  EVENTS_ERROR,
  CLEAR_EVENTS,
  CREATE_EVENT,
  EVENT,
  EDIT_PARTICIPANT_STATUS_SUCCESS,
  EDIT_PARTICIPANT_STATUS_ERROR,
  CHECK_PARTICIPANT_STATUS,
  REGISTER_ON_EVENT,
} from "../actions/types";

const initialState = {
  items: [],
  loading: true,
  error: {},
};

const getEvents = (state, events) => ({
  ...state,
  items: events,
  loading: false,
});

const getAllEvents = (state, events) => ({
  ...state,
  items: events,
  loading: false,
});

const createEvent = (state, event) => ({
  ...state,
  items: [...state.items, event],
});

const eventsError = (state, error) => ({
  ...state,
  error,
  loading: false,
});

const clearEvents = () => ({
  items: [],
  error: {},
  loading: false,
});

const eventGet = (state) => ({
  ...state,
  loading: true,
});

const eventGetSuccess = (state, event) => ({
  ...state,
  items: [...state.items, event],
  loading: false,
});

const eventGetError = (state, error) => ({
  ...state,
  error,
  loading: false,
});

const eventEdit = (state) => ({
  ...state,
  loading: true,
});

const eventEditSuccess = (state, event) => ({
  ...state,
  items: [...state.items, event],
});

const eventEditError = (state, error) => ({
  ...state,
  error,
  loading: false,
});

const eventDeleteSuccess = (state, event) => ({
  ...state,
  items: state.items.filter((item) => item._id !== event.id),
});

const editParticipantStatusSuccess = (state, event) => ({
  ...state,
  items: state.items.map((currentEvent) =>
    currentEvent._id === event._id ? event : currentEvent
  ),
});

const editParticipantStatusError = (state, error) => ({
  ...state,
  error,
  loading: false,
});

const checkParticipantStatus = (state, participant) => ({
  ...state,
  loading: false,
  participant_status: participant,
});

const registerOnEvent = (state, participant) => ({
  ...state,
  loading: false,
  participant_registered: participant,
});

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EVENTS:
      return getEvents(state, payload);

    case GET_ALL_EVENTS:
      return getAllEvents(state, payload);

    case CREATE_EVENT:
      return createEvent(state, payload);

    case EVENTS_ERROR:
      return eventsError(state, payload);

    case CLEAR_EVENTS:
      return clearEvents();

    case EVENT.GET:
      return eventGet(state);

    case EVENT.GET_SUCCESS:
      return eventGetSuccess(state, payload);

    case EVENT.GET_ERROR:
      return eventGetError(state, payload);

    case EVENT.EDIT:
      return eventEdit(state);

    case EVENT.EDIT_SUCCESS:
      return eventEditSuccess(state, payload);

    case EVENT.EDIT_ERROR:
      return eventEditError(state, payload);

    case EVENT.DELETE_SUCCESS:
      return eventDeleteSuccess(state, payload);

    case EDIT_PARTICIPANT_STATUS_SUCCESS:
      return editParticipantStatusSuccess(state, payload);

    case EDIT_PARTICIPANT_STATUS_ERROR:
      return editParticipantStatusError(state, payload);

    case CHECK_PARTICIPANT_STATUS:
      return checkParticipantStatus(state, payload);

    case REGISTER_ON_EVENT:
      return registerOnEvent(state, payload);

    default:
      return state;
  }
}
