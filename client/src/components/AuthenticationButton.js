import React, { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuthentication } from "../providers/Authentication";

const AuthenticationButton = () => {
  const { user, signOut } = useAuthentication();
  const history = useHistory();

  const signOutHandler = useCallback(() => {
    signOut().then(() => history.push("/user-sessions/new"));
  }, [signOut, history]);

  const className = "button justify-self-end";

  const DisplayButton = () => (
    user
      ? (
        <button className={className} type="button" onClick={signOutHandler}>
          Sign Out
        </button>
      ) : (
        <Link className={className} to="/user-sessions/new">
          Sign in
        </Link>
      )
  );

  return (
    <DisplayButton />
  );
};

export default AuthenticationButton;
