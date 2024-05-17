const assert = require('assert');
const { getFileContents, appendAndRun } = require('./utils');

describe('Your script', () => {
  it('should use "read" to get input into the correct variable', async () => {
    const scriptFile = await getFileContents('../questionnaire.sh');
    const output = await appendAndRun('../questionnaire.sh', 'echo $WEBSITE', options = { input: ['me', 'here', 'freeCodeCamp'] });

    assert(/^\s*read[ \t]+WEBSITE[ \t]*;?\s*$/gm.test(scriptFile) && /^freeCodeCamp$/gm.test(output));
  });
});
