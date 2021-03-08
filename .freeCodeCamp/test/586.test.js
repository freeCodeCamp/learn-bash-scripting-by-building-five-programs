/*const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const lC = lastCommand;
    const correctFile = lC[2] === 'countdown.sh' || lC[2] === './countdown.sh';
    const first = lC[0] === '[[' && lC[1] === '-x' && correctFile;
    const second = lC[4] === '5' && lC[5] === '-lt' && lC[6] === '0' && lC[7] === ']];'
    const correctLastArg = lC[9] === '$?' || lC[9] === '$?;'

    assert(first && lC[3] === '||' && second && lC[8] === 'echo' && correctLastArg);
  });
});*/
