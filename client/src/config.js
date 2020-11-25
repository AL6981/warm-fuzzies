import getApiClientUri from "./config/getApiClientUri";

const config = {
  env: process.env.NODE_ENV || "development",
  apiClient: {
    baseUri: getApiClientUri(process.env.NODE_ENV || "development"),
  },
  validation: {
    emailRegex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
};

export default config;
