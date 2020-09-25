import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

export const REDIRECT_IF_GUEST = "redirect_if_guest";
export const REDIRECT_IF_AUTHENTICATED = "redirect_if_authenticated";

const RequireAuth = ({
  component: Component,
  redirectCheck: redirectCheck,
  authProps,
  ...rest
}) =>
  redirectCheck === REDIRECT_IF_AUTHENTICATED ? (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("isAuthenticated") == "false" ||
        localStorage.getItem("isAuthenticated") !=
          authProps.auth.isAuthenticated.toString() ? (
          //   <Component {...props} />
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  ) : (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("isAuthenticated") == "true" &&
        localStorage.getItem("isAuthenticated") ==
          authProps.auth.isAuthenticated.toString() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/users/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

export default RequireAuth;
