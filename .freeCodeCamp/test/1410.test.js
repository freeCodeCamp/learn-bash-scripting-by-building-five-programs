const assert = require('assert');
const { getFileContents, getScriptOutput } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "if" statement added correctly', async () => {
    const scriptFile = await getFileContents('../fortune.sh');
    const output = await getScriptOutput('./fortune.sh', ['test?']);

    assert(/^\s*if[ \t]+\[\[[ \t]+![ \t]+\$1[ \t]+\]\]/gm.test(scriptFile) && /Ask a yes or no question:/g.test(output));
  });
});
