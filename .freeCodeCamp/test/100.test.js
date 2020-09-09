const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should "list" the folder contents with the correct flag', async () => {
    const cwd = await getCwd();
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'ls' && lastCommand[1] === '-l' && /\/project$/.test(cwd));
  });
});
