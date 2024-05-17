const assert = require('assert');
const { appendAndRun } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const output = await appendAndRun('../questionnaire.sh', 'echo $QUESTION2', options = { input: ['me'] });

    assert(/^Where are you from\?$/gm.test(output));
  });
});
