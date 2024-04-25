const assert = require('assert');
const app = require('../../src/app');

describe('\'opsCentre\' service', () => {
  it('registered the service', () => {
    const service = app.service('opsCentre');

    assert.ok(service, 'Registered the service (opsCentre)');
  });
});
