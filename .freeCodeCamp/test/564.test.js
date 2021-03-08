const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand(0, false);

    assert(/^\s*\[\[\s+10\s+-gt\s+1\s+\]\];\s*echo\s+\$\?;\s*?$/);
  });
});
