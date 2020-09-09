const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested comment added correctly', async () => {
    const scriptFile = await getFileContents('../bingo.sh');

    assert(/^#[ \t]*Bingo Number Generator[ \t]*$/gm.test(scriptFile));
  });
});
