const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "for" loop added correctly', async () => {
    const scriptFile = await getFileContents('../countdown.sh');

    assert(/^\s*sleep[ \t]+1[ \t]*;?[ \t]*$/gm.test(scriptFile));
  });
});
