const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "while" loop added correctly', async () => {
    const scriptFile = await getFileContents('../countdown.sh');

    assert(false);
  });
});
