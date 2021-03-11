/*const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand();
    const secondToLastCommand = await getLastCommand(1);
    const slc = secondToLastCommand;
    const slcTest = slc[0] === '((' && slc[1] === '$RANDOM' && slc[2] === '%' && slc[3] === '75' && slc[4] === '))' && slc[5] === undefined;

    assert(lastCommand[0] === 'echo' && lastCommand[1] === '$?' && lastCommand[2] === undefined && slcTest);
  });
});*/
