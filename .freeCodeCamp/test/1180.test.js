const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested function added correctly', async () => {
    const scriptFile = await getFileContents('../fortune.sh');

    assert(/^\s*(function[ \t]+)?GET_FORTUNE[ \t]*\([ \t]*\)\s*{\s*}[ \t]*;?$/gm.test(scriptFile));
  });
});
