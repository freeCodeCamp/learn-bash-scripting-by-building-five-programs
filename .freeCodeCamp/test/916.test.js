const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'declare' && lastCommand[1] === '-p' && lastCommand[2] === 'RANDOM');
  });
});
