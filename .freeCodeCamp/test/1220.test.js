const assert = require('assert');
const { appendAndRun } = require('./utils');

describe('Your script', () => {
  it('should "read" input into the suggested variable correctly', async () => {
    const output = await appendAndRun('../fortune.sh', 'echo $QUESTION', { input: ['test?'] });

    assert(/test?/gm.test(output));
  });
});
