const { VmType } = require("./vmType.class");
const createModel = require("../../models/vmType.model");
const hooks = require("./vmType.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
    whitelist: ["$populate"],
  };

  // Initialize our service with any options it requires
  app.use("/vmType", new VmType(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("vmType");

  service.hooks(hooks);
};
