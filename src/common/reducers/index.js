import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import notification from "./notification";
import profile from "./profile";
import events from "./events";
import modal from "./modal-reducer";

export default combineReducers({
  alert,
  notification,
  auth,
  profile,
  events,
  modal,
});
