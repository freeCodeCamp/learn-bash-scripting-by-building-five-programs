const assert = require('assert');
const { getLastCommand, getCommandOutput } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'help' && lastCommand[1] === 'function');
  });
});
