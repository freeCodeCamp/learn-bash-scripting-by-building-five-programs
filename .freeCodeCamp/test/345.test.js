const assert = require('assert');
const { getFileContents, getScriptOutput } = require('./utils');

describe('Your script', () => {
  it('should "echo" the suggested variable correctly', async () => {
    const scriptFile = await getFileContents('../questionnaire.sh');
    const output = await getScriptOutput('./questionnaire.sh', ['me', 'here']);

    assert(/^\s*echo[ \t]+('|")?\$QUESTION3\1?[ \t]*;?\s*$/gm.test(scriptFile) && /^What's your favorite coding website\?$/gm.test(output));
  });
});
