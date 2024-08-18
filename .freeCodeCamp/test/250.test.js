const assert = require('assert');
const { getFileContents, appendAndRun } = require('./utils');

describe('Your script', () => {
  it('should use "read" to get input into the correct variable', async () => {
    const scriptFile = await getFileContents('../questionnaire.sh');
    const output = await appendAndRun('../questionnaire.sh', 'echo $LOCATION', options = { input: ['me', 'here'] });

    assert(/^\s*read[ \t]+LOCATION[ \t]*;?\s*$/gm.test(scriptFile) && /^here$/gm.test(output));
  });
});
