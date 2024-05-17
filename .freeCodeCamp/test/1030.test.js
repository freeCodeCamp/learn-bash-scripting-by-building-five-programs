const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the correct "shebang"', async () => {
    const scriptFile = await getFileContents('../fortune.sh');

    assert(/^\s*#![ \t]*\/bin\/bash\s*$/gm.test(scriptFile));
  });
});
