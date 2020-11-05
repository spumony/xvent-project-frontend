import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from "./types";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

export const setNotification = (msg, notificationType) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SET_NOTIFICATION,
    payload: { msg, notificationType, id },
  });

  dispatch({ type: REMOVE_NOTIFICATION, payload: id });

  switch (notificationType) {
    case "info":
      return toast.info(msg);
    case "dark":
      return toast.dark(msg);
    case "warn":
      return toast.warn(msg);
    case "error":
      return toast.error(msg);
    case "success":
      return toast.success(msg);
    default:
      return toast(msg);
  }
};
