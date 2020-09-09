const assert = require('assert');
const { getFileContents, getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should have the suggested comment added correctly', async () => {
    const scriptFile = await getFileContents('../countdown.sh');
    const output = await getCommandOutput('./countdown.sh 1');

    assert(/^\n~~ Countdown Timer ~~\n{2}/g.test(output) && !/1/g.test(output) && /:[ \t]+'[^']*'[ \t]*?\n+/g.test(scriptFile));
  });
});
