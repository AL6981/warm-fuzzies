import React from "react";
import { Redirect, Route } from "react-router";
import { useAuthentication } from "../../providers/Authentication";

const AuthenticatedRoute = ({ component: Component, requireOrganization = true, ...rest }) => {
  const { user, checked } = useAuthentication();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          if (!requireOrganization || user.organizationId) {
            return <Component {...props} />;
          } else {
            <Redirect to="/organizations/new" />;
          }
        } else {
          if (checked) {
            return <Redirect to="/user-sessions/new" />;
          }
        }
      }}
    />
  );
};

export default AuthenticatedRoute;
