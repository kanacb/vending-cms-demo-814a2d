const assert = require('assert');
const app = require('../../src/app');

describe('\'breakdown\' service', () => {
  it('registered the service', () => {
    const service = app.service('breakdown');

    assert.ok(service, 'Registered the service (breakdown)');
  });
});
