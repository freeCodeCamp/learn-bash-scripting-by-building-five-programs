const assert = require('assert');
const { appendAndRun } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const output = await appendAndRun('../questionnaire.sh', 'echo $QUESTION1');

    assert(/^What's your name\?$/gm.test(output));
  });
});
