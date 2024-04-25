const { Breakdown } = require("./breakdown.class");
const createModel = require("../../models/breakdown.model");
const hooks = require("./breakdown.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
    whitelist: ["$populate"],
  };

  // Initialize our service with any options it requires
  app.use("/breakdown", new Breakdown(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("breakdown");

  service.hooks(hooks);
};
