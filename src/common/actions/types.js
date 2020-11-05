import buildKeyMirrorEnum from "../utils/build-key-mirror-enum";

export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";
export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const ACCOUNT_DELETED = "ACCOUNT_DELETED";
export const CLEAR_PROFILE = "CLEAR_PROFILE";
export const GET_PROFILE = "GET_PROFILE";
export const PROFILE_ERROR = "PROFILE_ERROR";
export const GET_EVENTS = "GET_EVENTS";
export const EVENTS_ERROR = "EVENTS_ERROR";
export const CLEAR_EVENTS = "CLEAR_EVENTS";
export const CREATE_EVENT = "CREATE_EVENT";

export const GET_EVENT = "GET_EVENT";
export const GET_EVENT_SUCCESS = "GET_EVENT_SUCCESS";
export const GET_EVENT_ERROR = "GET_EVENT_ERROR";

export const EDIT_PARTICIPANT_STATUS_SUCCESS =
  "EDIT_PARTICIPANT_STATUS_SUCCESS";
export const EDIT_PARTICIPANT_STATUS_ERROR = "EDIT_PARTICIPANT_STATUS_ERROR";

const suffixes = ["SUCCESS", "ERROR"];

export const EVENT = buildKeyMirrorEnum("EVENT", [
  ["GET", suffixes],
  ["EDIT", suffixes],
  ["DELETE", suffixes],
]);
