const assert = require('assert');
const { getScriptOutput } = require('./utils');

describe('Your script', () => {
  it('should "echo" the suggested text correctly', async () => {
    const output = await getScriptOutput('./questionnaire.sh', ['me', 'here', 'freeCodeCamp']);

    assert(/\n{2}Hello me from here\. I learned that your favorite coding website is freeCodeCamp!\n$/g.test(output))
  });
});
