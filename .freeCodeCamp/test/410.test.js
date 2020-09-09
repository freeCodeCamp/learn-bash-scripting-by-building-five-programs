const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested comment added correctly', async () => {
    const scriptFile = await getFileContents('../countdown.sh');

    assert(/^#[ \t]*Program that counts down to zero from a given argument[ \t]*$/gm.test(scriptFile));
  });
});
