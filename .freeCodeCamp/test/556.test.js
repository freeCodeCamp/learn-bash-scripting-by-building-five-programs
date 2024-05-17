const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand(0, false);
    // second to last command
    const slc = await getLastCommand(1);
    const slcTest = slc[0] === '[[' && slc[1] === '4' && slc[2] === '-le' && slc[3] === '5' && slc[4] === ']]' && (slc[5] === undefined || slc[5].op === ';');

    assert(/^[ \t]*echo[ \t]+\$\?[ \t]*;?[ \t]*$/.test(lastCommand) && slcTest);
  });
});
