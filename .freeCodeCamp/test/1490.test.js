const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested commands added correctly', async () => {
    const scriptFile = await getFileContents('../five.sh');

    assert(false);
  });
});
