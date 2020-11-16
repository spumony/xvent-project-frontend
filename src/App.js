import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./common/components/layout/Landing";
import Routes from "./common/components/routing/Routes";
import Notification from "./common/components/layout/notification/Notification";
// Redux
import { Provider } from "react-redux";
import store from "./common/store";
import { loadUser } from "./common/actions/auth";
import { getCurrentProfile } from "./common/actions/profile";
import setAuthToken from "./common/utils/setAuthToken";
import DeleteEvent from "./modals/delete-event-modal";
import RegisterOnEvent from "./modals/register-on-event-modal";
// Styles
import "./App.scss";
import CheckStatusModal from "./modals/check-status-modal";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getCurrentProfile());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Notification />
        <DeleteEvent />
        <CheckStatusModal />
        <RegisterOnEvent />

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
