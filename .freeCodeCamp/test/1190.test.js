const assert = require('assert');
const { appendAndRun } = require('./utils');

describe('Your script', () => {
  it('should "echo" the suggested text correctly', async () => {
    const output = await appendAndRun('../fortune.sh', 'GET_FORTUNE');

    assert(/Ask a yes or no question:/gm.test(output));
  });
});
