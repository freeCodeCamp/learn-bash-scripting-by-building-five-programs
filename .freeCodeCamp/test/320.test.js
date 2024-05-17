const assert = require('assert');
const { getScriptOutput } = require('./utils');

describe('Your script', () => {
  it('should "echo" the suggested text correctly', async () => {
    const output = await getScriptOutput('./questionnaire.sh', ['me', 'here']);

    assert(/^n~~ Questionnaire ~~n$/gm.test(output))
  });
});
