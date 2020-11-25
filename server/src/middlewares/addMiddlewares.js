import addEnvironmentMiddlewares from "./addEnvironmentMiddlewares.js";
import addClientMiddlewares from "./addClientMiddlewares.js";
import addExpressSession from "./addExpressSession.js";
import addPassport from "./addPassport.js";

const addMiddlewares = async app => {
  addExpressSession(app);
  await addPassport(app);
  await addClientMiddlewares(app);
  await addEnvironmentMiddlewares(app);
};

export default addMiddlewares;
