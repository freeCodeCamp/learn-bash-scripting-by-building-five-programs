const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand(0, false);

    assert(/^\s*echo[ \t]+\$\(\([ \t]*\$?RANDOM[ \t]*%[ \t]*75[ \t]*\)\)[ \t]*;?\s*$/gm.test(lastCommand));
  });
});
