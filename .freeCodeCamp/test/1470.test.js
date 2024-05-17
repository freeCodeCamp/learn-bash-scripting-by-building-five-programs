const assert = require('assert');
const { getFileContents, getScriptOutput } = require('./utils');

describe('Your script', () => {
  it('should have the suggested command added correctly', async () => {
    const scriptFile = await getFileContents('../five.sh');
    const output = await getScriptOutput('./five.sh', ['me', 'here', 'fCC']);

    assert(/^\s*\.\/questionnaire\.sh[ \t]*;?\s*$/gm.test(scriptFile) && /~~ Questionnaire ~~/gm.test(output))
  });
});
