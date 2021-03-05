const assert = require('assert');
const { getFileContents, appendAndRun } = require('./utils');

describe('Your script', () => {
  it('should use "read" to get input into the correct variable', async () => {
    const scriptFile = await getFileContents('../questionnaire.sh');
    const output = await appendAndRun('../questionnaire.sh', 'echo $NAME', options = { input: ['me'] });

    assert(/^\s*read[ \t]+NAME[ \t]*;?\s*$/gm.test(scriptFile) && /^me$/gm.test(output));
  });
});
