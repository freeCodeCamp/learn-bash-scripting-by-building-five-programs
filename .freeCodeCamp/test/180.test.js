const assert = require('assert');
const { getFileContents, getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should "echo" the suggested variable correctly', async () => {
    const scriptFile = await getFileContents('../questionnaire.sh');
    const output = await getCommandOutput('./questionnaire.sh');

    assert(/^\s*echo[ \t]+('|")?\$QUESTION1\1?[ \t]*;?\s*$/gm.test(scriptFile) && /^What's your name\?$/gm.test(output));
  });
});
