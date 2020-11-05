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
// Styles
import "./App.scss";

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
        <>
          <Notification />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

export default App;
