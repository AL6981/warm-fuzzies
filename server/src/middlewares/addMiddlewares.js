import addEnvironmentMiddlewares from "./addEnvironmentMiddlewares.js";
import addClientMiddlewares from "./addClientMiddlewares.js";
import addExpressSession from "./addExpressSession.js";

const addMiddlewares = async app => {
  addExpressSession(app);
  await addClientMiddlewares(app);
  await addEnvironmentMiddlewares(app);
};

export default addMiddlewares;
