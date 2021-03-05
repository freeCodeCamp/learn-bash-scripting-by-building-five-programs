const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand();
    const args = lastCommand.slice(1).join();

    assert(lastCommand[0] === 'echo' && args === '$((RANDOM%75))');
  });
});
