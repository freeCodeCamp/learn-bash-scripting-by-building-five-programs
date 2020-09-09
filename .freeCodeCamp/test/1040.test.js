const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the correct comment', async () => {
    const scriptFile = await getFileContents('../fortune.sh');

    assert(/^#[ \t]*Program to tell a persons fortune[ \t]*$/gm.test(scriptFile));
  });
});
