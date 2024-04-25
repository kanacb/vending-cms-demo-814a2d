const { LocationMaster } = require('./locationMaster.class');
const createModel = require('../../models/locationMaster.model');
const hooks = require('./locationMaster.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/locationMaster', new LocationMaster(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('locationMaster');

  service.hooks(hooks);
};