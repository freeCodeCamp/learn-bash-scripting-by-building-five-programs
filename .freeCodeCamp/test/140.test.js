const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the "ls" command added correctly', async () => {
    const scriptFile = await getFileContents('../questionnaire.sh');

    assert(/^\s*ls[ \t]+-l[ \t]*;?\s*$/gm.test(scriptFile));
  });
});
