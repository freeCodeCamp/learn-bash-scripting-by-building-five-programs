/*const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();
    const secondToLastCommand = await getLastCommand(1);
    const slc = secondToLastCommand;
    const slcTest = slc[0] === '[[' && slc[1] === '0' && slc[2] === '-le' && slc[3] === '5' && slc[4] === ']]';
    const correctLastArg = lastCommand[1] === '$?' || lastCommand[1] === '$?;';

    assert(lastCommand[0] === 'echo' && correctLastArg && slcTest);
  });
});*/
