const assert = require('assert');
const { getScriptOutput, appendAndRun } = require('./utils');

describe('Your script', () => {
  it('should have the suggests "if/else" statement added correctly', async () => {
    const output = await appendAndRun('../fortune.sh', 'GET_FORTUNE again', { input: ['test?', 'test?']});

    assert(/Try again\. Make sure it ends with a question mark:/g.test(output) && /Ask a yes or no question:/g.test(output));
  });
});
