/*const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const lC = lastCommand;
    const lC2 = lC[2] === 'countdown.sh' || lC[2] === './countdown.sh';
    const correctLastArg = lC[5] === '$?' || lC[5] === '$?;'

    assert(lC[0] === '[[' && lC[1] === '-x' && lC2 && lC[3] === ']];' && lC[4] === 'echo' && correctLastArg);
  });
});*/
