const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand(0, false);
    const secondToLastCommand = await getLastCommand(1);
    const slc = secondToLastCommand;
    const slcTest = slc[0] === '[[' && slc[1] === '4' && slc[2] === '-ge' && slc[3] === '5' && slc[4] === ']]' && (slc[5] === undefined || slc[5].op === ';');

    assert(/echo[ \t]+\$\?[ \t]*;?[ \t]*$/.test(lastCommand) && slcTest);
  });
});
