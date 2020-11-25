import AbstractClient from "./AbstractClient";

class UserClient extends AbstractClient {
  // eslint-disable-next-line class-methods-use-this
  async postUser({ email, password }) {
    const resp = await UserClient.post("/users", { email, password }).catch((error) => {
      const errorStatus = error?.response?.status;
      if ([401, 422].includes(errorStatus)) {
        return error.response.data;
      }

      throw error;
    });

    if (resp && resp.status === 201) {
      return true;
    }
    return resp;
  }
}

export default UserClient;
