const assert = require('assert');
const { getFileContents, getScriptOutput } = require('./utils');

describe('Your script', () => {
  it('should "echo" the suggested text correctly', async () => {
    const scriptFile = await getFileContents('../questionnaire.sh');
    const output = await getScriptOutput('./questionnaire.sh', ['me', 'here', 'freeCodeCamp']);

    assert(/^\s*echo[ \t]+('|"|)Hello[ \t]+\$NAME from \$LOCATION\. I learned that your favorite coding website is \$WEBSITE!\1[ \t]*;?\s*$/gm.test(scriptFile) && /^Hello me from here. I learned that your favorite coding website is freeCodeCamp!$/gm.test(output))
  });
});
