const assert = require('assert');
const { getFileContents, getScriptOutput } = require('./utils');

describe('Your script', () => {
  it('should "echo" the suggested text correctly', async () => {
    const scriptFile = await getFileContents('../questionnaire.sh');
    const output = await getScriptOutput('./questionnaire.sh', ['me', 'here']);

    assert(/^\s*echo[ \t]+('|"|)Hello[ \t]+\$NAME from \$LOCATION\.\1[ \t]*;?\s*$/gm.test(scriptFile) && /^Hello me from here\.$/gm.test(output))
  });
});
