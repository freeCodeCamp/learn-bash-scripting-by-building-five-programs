const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand();
    const math = lastCommand.splice(1).join('');
    const mathTest = math === '$RANDOM%75' || math === '$RANDOM%75;';

    assert(lastCommand[0] === 'echo' && mathTest);
  });
});
