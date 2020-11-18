const getApiClientUri = (nodeEnv) => ({
  development: "http://localhost:3000/api/v1",
  test: "http://localhost:3000/api/v1",
}[nodeEnv]);

export default getApiClientUri;
