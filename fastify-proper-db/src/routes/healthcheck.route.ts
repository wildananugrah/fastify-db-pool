import { HealthCheck } from "../dependencies/impl/healthcheck.svc";

const routes = async (app: any, options: any) => {
  app.route({
    method: "GET",
    url: "/_/healthcheck",
    handler: async (req: any, res: any) => {
      const db = await new HealthCheck(app.dbPool).healthcheck();
      return res.status(200).send({ app: true, db });
    },
  });
};

export default routes;
