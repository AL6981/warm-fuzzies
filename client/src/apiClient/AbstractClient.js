import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";
import config from "../config";

class AbstractClient {
  static post(path, params = {}, reqConfig = {}) {
    return this.client().post(path, params, reqConfig);
  }

  static client() {
    axios.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error),
    );
    // hack to get axios to cooperate with nock
    if (config.env === "test") {
      axios.defaults.adapter = httpAdapter;
    }

    return axios.create({
      baseURL: config.apiClient.baseUri,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default AbstractClient;
