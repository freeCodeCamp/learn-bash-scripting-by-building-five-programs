const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand(0, false);

    assert(/^\s*echo\s+\$\(\(\s*\$?I\s*\+\s*4\s*\)\)\s*;?\s*$/.test(lastCommand));
  });
});
