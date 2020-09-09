const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable', async () => {
    const scriptFile = await getFileContents('../bingo.sh');

    assert(/^\s*NUMBER=('|"|)\$RANDOM%75[ \t]*;?[ \t]*$/gm.test(scriptFile));
  });
});
