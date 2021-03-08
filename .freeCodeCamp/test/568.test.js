const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand(0, false);

    assert(/^\s*ls\s*;\s*echo\s+\$\?\s*;?\s*$/.test(lastCommand));
  });
});
