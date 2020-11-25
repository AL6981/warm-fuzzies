import React from "react";
import { Redirect, Route } from "react-router";
import { useAuthentication } from "../../providers/Authentication";

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const { user, checked } = useAuthentication();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...props} />;
        } else {
          if (checked) {
            addNotification({
              id: "signInRequired",
            })
            return <Redirect to="/user-sessions/new" />;
          }
        }

      }}
    />
  );
};

export default AuthenticatedRoute;
