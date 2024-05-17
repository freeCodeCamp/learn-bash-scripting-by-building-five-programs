const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand(0, false);

    assert(/^\s*echo\s+('|"|)\$\(\(\s*\$?RANDOM\s*%\s*75\s*\+\s*1\s*\)\)\1\s*;?\s*$/.test(lastCommand));
  });
});
