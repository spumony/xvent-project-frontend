import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "../auth/SignUp";
import SignIn from "../auth/SignIn";
import Notification from "../layout/notification/Notification";
import Dashboard from "../dashboard/Dashboard";
// import ProfileForm from "../profile-forms/ProfileForm";
// import AddExperience from "../profile-forms/AddExperience";
// import AddEducation from "../profile-forms/AddEducation";
// import Profiles from "../profiles/Profiles";
// import Profile from "../profile/Profile";
// import Posts from "../posts/Posts";
// import Post from "../post/Post";
// import NotFound from "../layout/NotFound";
import PrivateRoute from "./PrivateRoute";
import Profile from "../profile/Profile";
import CreateProfile from "../profile/profile-forms/CreateProfile";
import EditProfile from "../profile/profile-forms/EditProfile";
import CreateEvent from "../events/event-form/CreateEvent";
import EditEvent from "../events/event-form/EditEvent";
import EventParticipants from "../events/event-participants/EventParticipants";
import NotFound from "../layout/NotFound";
import EventPage from "../events/event-page/EventPage";
import SingleEvent from "../events/single-event/SingleEvent";
import Modal from "../modal/Modal";

const Routes = (props) => {
  return (
    <section>
      <Notification />
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/events" component={EventPage} />
        <Route path="/event/:id" component={SingleEvent} />
        <Route path="/modal" component={Modal} />
        {/* <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} /> */}
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute
          exact
          path="/events/create-event"
          component={CreateEvent}
        />
        <PrivateRoute
          exact
          path="/events/edit-event/:id"
          component={EditEvent}
        />
        <PrivateRoute
          exact
          path="/events/event-participants/:id"
          component={EventParticipants}
        />
        {/* <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        */}

        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
