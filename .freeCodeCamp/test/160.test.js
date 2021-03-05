const assert = require('assert');
const { getFileContents, removeWhitespace } = require('./utils');

describe('Your script', () => {
  it('should only have a "shebang"', async () => {
    const scriptFile = await getFileContents('../questionnaire.sh');
    const noWhitespace = await removeWhitespace(scriptFile);

    assert(/^\s*#![ \t]*\/bin\/bash\s*$/gm.test(scriptFile) && /^#!\/bin\/bash$/gm.test(noWhitespace));
  });
});
