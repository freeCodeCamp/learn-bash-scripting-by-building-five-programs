const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested commands in the terminal', async () => {
    const lastCommand = await getLastCommand(0, false);

    assert(/^\s*\[\[\s+-x\s+(\.\/)?countdown\.sh\s+\]\]\s*;\s*echo\s+\$\?\s*;?\s*$/g.test(lastCommand));
  });
});
