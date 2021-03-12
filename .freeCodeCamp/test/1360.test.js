const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand(0, false);

    assert(/^\s*echo[ \t]+('|"|)\$VAR\1[ \t]*;?\s*$/.test(lastCommand));
  });
});
