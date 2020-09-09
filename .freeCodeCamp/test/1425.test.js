const assert = require('assert');
const { getScriptOutput } = require('./utils');

describe('Your script', () => {
  it('should have the suggests "if" statement added correctly', async () => {
    const output = await getScriptOutput('./fortune.sh', ['test?']);

    assert(/\n{2}(Yes|No|Maybe|Outlook good|Don't count on it|Ask again later)\n$/g.test(output))
  });
});
