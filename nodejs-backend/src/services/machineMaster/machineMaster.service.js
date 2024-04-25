const { MachineMaster } = require('./machineMaster.class');
const createModel = require('../../models/machineMaster.model');
const hooks = require('./machineMaster.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/machineMaster', new MachineMaster(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('machineMaster');

  service.hooks(hooks);
};