const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === '[[' && lastCommand[1] === '4' && lastCommand[2] === '-ge' && lastCommand[3] === '5' && lastCommand[4] === ']]' && (lastCommand[5] === undefined || lastCommand[5].op === ';'));
  });
});
