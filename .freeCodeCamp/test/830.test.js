const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should "echo" the suggested text correctly', async () => {
    const scriptFile = await getFileContents('../bingo.sh');

    assert(false);
  });
});
