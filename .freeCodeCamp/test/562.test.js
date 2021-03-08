const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand(0, false);

    assert(/^\s*\[\[\s+5\s+-lt\s+0\s+\]\];\s*echo\s+\$\?;?\s*$/g.test(lastCommand));
  });
});
