/* eslint-disable no-else-return */
import React, { createContext, useReducer, useMemo, useContext, useEffect } from "react";

const initialState = { user: null, checked: false };
const AuthenticationContext = createContext(initialState);

const SIGN_IN = "authentication/signIn";
const SIGN_OUT = "authentication/signOut";

export const authenticationReducer = (state, action) => {
  const { type, user } = action;
  if (type === SIGN_IN) {
    return { user, checked: true };
  } else if (type === SIGN_OUT) {
    return initialState;
  } else {
    return state;
  }
};

export const authenticationActions = (state, dispatch) => {
  return {
    signIn: (user) => {
      dispatch({
        type: SIGN_IN,
        user,
      });
    },
    signOut: () => {
      dispatch({
        type: SIGN_OUT,
      });
    },
  };
};

const AuthenticationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authenticationReducer, initialState);
  const actions = authenticationActions(state, dispatch);

  const value = useMemo(
    () => ({
      ...state,
      ...actions,
    }),
    [state, actions]
  );

  useEffect(() => {
    fetch("/api/v1/user-sessions/current")
      .then((resp) => {
        if (resp.ok && resp.status === 200) {
          return resp.json();
        } else {
          return null;
        }
      })
      .then((user) => {
        actions.signIn(user);
      });
  }, []);

  return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>;
};

export function useAuthentication() {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error("Authentication Context not found");
  }
  return context;
}

export default {
  AuthenticationProvider,
  useAuthentication,
};

