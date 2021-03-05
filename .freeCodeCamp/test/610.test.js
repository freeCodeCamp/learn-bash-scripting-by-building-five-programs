const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should run your script with the correct argument', async () => {
    const cwd = await getCwd();
    const lastCommand = await getLastCommand();
    const arg = parseInt(lastCommand[1]);

    assert(lastCommand[0] === './countdown.sh' && (arg < 1 || isNaN(arg) || /\./.test(lastCommand[1])) && /\/project$/.test(cwd));
  });
});
