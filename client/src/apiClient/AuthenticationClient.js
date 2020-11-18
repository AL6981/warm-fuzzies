import AbstractClient from "./AbstractClient";

class AuthenticationClient extends AbstractClient {
  // eslint-disable-next-line class-methods-use-this
  async signIn({ email, username, password }) {
    const resp = await AuthenticationClient.post("/user-sessions/register", { email, username, password }).catch(
      (error) => {
        if (error.response.status === 401) {
          return undefined;
        }
        throw error;
      },
    );
    if (resp && resp.data) {
      return resp.data;
    }
    return undefined;
  }
};

export default AuthenticationClient;