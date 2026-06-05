const assert = require('assert');
const { appendAndRun } = require('./utils');

describe('Your script', () => {
  it('should define the variable and its value correctly', async () => {
    const output = await appendAndRun('../questionnaire.sh', 'echo $QUESTION1');

    assert(/^What's your name\?$/gm.test(output));
  });
});
