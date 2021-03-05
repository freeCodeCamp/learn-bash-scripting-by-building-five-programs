const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand(0, false);
    const secondToLastCommand = await getLastCommand(1);
    const slc = secondToLastCommand;
    const slcTest = slc[0] === '[[' && slc[1] === '5' && slc[2] === '-lt' && slc[3] === '0' && slc[4] === ']]';

    assert(/echo\s+\$\?;?$/.test(lastCommand) && slcTest);
  });
});
