const assert = require('assert');
const { getLastCommand, getCommandOutput } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'echo' && (lastCommand[1] === '${ARR[1]}' || lastCommand[1] === '${ARR[1]};'));
  });
});
