const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should "echo" the suggested text correctly', async () => {
    const scriptFile = await getFileContents('../questionnaire.sh');

    assert(false);
  });
});
