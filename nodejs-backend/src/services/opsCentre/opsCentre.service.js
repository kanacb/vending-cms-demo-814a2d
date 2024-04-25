const { OpsCentre } = require("./opsCentre.class");
const createModel = require("../../models/opsCentre.model");
const hooks = require("./opsCentre.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
    whitelist: ["$populate"],
  };

  // Initialize our service with any options it requires
  app.use("/opsCentre", new OpsCentre(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("opsCentre");

  service.hooks(hooks);
};
