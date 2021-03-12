const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'type' && lastCommand[1] === 'if' && (lastCommand[2] === undefined || lastCommand[2].op === ';'));
  });
});
