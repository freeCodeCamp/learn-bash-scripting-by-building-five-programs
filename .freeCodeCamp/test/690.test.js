const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should run your script with the correct argument', async () => {
    const cwd = await getCwd();
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === './countdown.sh' && lastCommand[1] === '3' && /\/project$/.test(cwd));
  });
});
