const assert = require('assert');
const { getFileContents, getScriptOutput } = require('./utils');

describe('Your script', () => {
  it('should "echo" the suggested variable correctly', async () => {
    const scriptFile = await getFileContents('../questionnaire.sh');
    const output = await getScriptOutput('./questionnaire.sh', ['me']);

    assert(/^\s*echo[ \t]+('|")?\$QUESTION2\1?[ \t]*;?\s*$/gm.test(scriptFile) && /^Where are you from\?$/gm.test(output));
  });
});
