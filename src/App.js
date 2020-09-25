import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./containers/navbar";
import PostIndex from "./containers/posts/postIndex";
import PostListContainer from "./containers/posts/postListContainer";
import NewPost from "./containers/posts/newPost";
import ShowPost from "./containers/posts/showPost";
import EditPost from "./containers/posts/editPost";
import Register from "./containers/users/register";
import Login from "./containers/users/login";
import Profile from "./containers/users/profile";
import RequireAuth from "./components/requireAuth";

import "./index.css";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/stackslide.css";
import ReactGA from "react-ga";

import {
  REDIRECT_IF_GUEST,
  REDIRECT_IF_AUTHENTICATED,
} from "./components/requireAuth";

class App extends React.Component {
  state = { allBooks: [] };
  componentDidMount() {
    ReactGA.initialize("UA-174965063-1");
    window.analytics.identify("f4ca124298", {
      name: window.navigator.userAgent,
      email: `${window.navigator.appVersion} ${window.navigator.platform}`,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Navbar />
          <div className="container">
            <Switch>
              <RequireAuth
                path="/users/profile"
                component={Profile}
                authProps={this.props}
                redirectCheck={REDIRECT_IF_GUEST}
              />
              <RequireAuth
                path="/users/register"
                component={Register}
                redirectCheck={REDIRECT_IF_AUTHENTICATED}
                authProps={this.props}
              />
              <RequireAuth
                path="/users/login"
                component={Login}
                redirectCheck={REDIRECT_IF_AUTHENTICATED}
                authProps={this.props}
              />
              <RequireAuth
                path="/question/create"
                component={NewPost}
                authProps={this.props}
                redirectCheck={REDIRECT_IF_GUEST}
              />
              <RequireAuth
                path="/question/edit/:id"
                component={EditPost}
                authProps={this.props}
                redirectCheck={REDIRECT_IF_GUEST}
              />
              <Route
                path="/question/:id"
                authProps={this.props}
                component={ShowPost}
              ></Route>
              <Route
                path="/"
                authProps={this.props}
                component={PostListContainer}
              ></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(App);
