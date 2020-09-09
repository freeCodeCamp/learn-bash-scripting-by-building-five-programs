const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should echo the correct text', async () => {
    const scriptFile = await getFileContents('../questionnaire.sh');

    assert(/^\s*echo[ \t]+hello[ \t]+questionnaire[ \t]*;?\s*$/gm.test(scriptFile));
  });
});
