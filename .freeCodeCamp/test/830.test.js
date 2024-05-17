const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');
describe('You', () => {
  it('should run your script by executing it', async () => {
    const cwd = await getCwd();
    const lastCommand = await getLastCommand();
    const secondLastCommand = await getLastCommand(1);

    assert(lastCommand[0] === './bingo.sh' && secondLastCommand[0] === './bingo.sh' && /\/project$/.test(cwd));
  });
});
