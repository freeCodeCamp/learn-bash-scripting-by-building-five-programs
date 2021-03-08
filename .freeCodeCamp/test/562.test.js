const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const lC = lastCommand;
    const correctLastArg = lC[6] === '$?' || lC[6] === '$?;'

    assert(lC[0] === '[[' && lC[1] === '5' && lC[2] === '-lt' && lC[3] === '0' && lC[4] === ']];' && lC[5] === 'echo' && correctLastArg);
  });
});
