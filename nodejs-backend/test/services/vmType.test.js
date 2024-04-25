const assert = require('assert');
const app = require('../../src/app');

describe('\'vmType\' service', () => {
  it('registered the service', () => {
    const service = app.service('vmType');

    assert.ok(service, 'Registered the service (vmType)');
  });
});
