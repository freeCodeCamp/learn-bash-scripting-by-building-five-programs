const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const lC = lastCommand;
    const correctFile = lC[3] === 'countdown.sh' || lC[3] === './countdown.sh';
    const first = lC[0] === '[[' && lC[2] === '-x' && correctFile && lC[4] === ']]';
    const second = lC[6] === '[[' && lC[7] === '5' && lC[8] === '-lt' && lC[9] === '0' && lC[10] === ']];'
    const correctLastArg = lC[6] === '$?' || lC[6] === '$?;'

    assert(first && lC[5] === '&&' && second && lC[11] === 'echo' && correctLastArg);
  });
});
