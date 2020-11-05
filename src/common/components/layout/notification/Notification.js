import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  return (
    <>
      <ToastContainer autoClose={5000} />
    </>
  );
};

export default Notification;
