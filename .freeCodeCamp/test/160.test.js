const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should only have a "shebang"', async () => {
    const scriptFile = await getFileContents('../questionnaire.sh');

    assert(false);
  });
});
