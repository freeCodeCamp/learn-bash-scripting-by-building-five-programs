const assert = require('assert');
const { appendAndRun } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const output = await appendAndRun('../questionnaire.sh', 'echo $QUESTION3', options = { input: ['me', 'here'] });

    assert(/^What's your favorite coding website\?$/gm.test(output));
  });
});
