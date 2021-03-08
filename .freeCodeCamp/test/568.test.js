const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const lC = lastCommand;
    const correctLastArg = lC[2] === '$?' || lC[2] === '$?;'

    assert(lC[0] === 'ls;' && lC[1] === 'echo' && correctLastArg);
  });
});
