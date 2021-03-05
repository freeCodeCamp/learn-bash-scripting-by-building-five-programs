const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should use "read" to get input into the correct variable', async () => {
    const scriptFile = await getFileContents('../questionnaire.sh');

    assert(false);
  });
});
