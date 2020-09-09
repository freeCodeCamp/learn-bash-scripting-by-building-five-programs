const assert = require('assert');
const { getFileContents, getScriptOutput } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "until" loop added correctly', async () => {
    const scriptFile = await getFileContents('../fortune.sh');
    const output = await getScriptOutput('./fortune.sh', ['t', 'test?']);

    assert(/^\s*until[ \t]+\[\[[ \t]+\$QUESTION[ \t]+==?[ \t]+('|"|)test\?\1[ \t]+\]\]/gm.test(scriptFile) && output.match(/Ask a yes or no question:/gm).length === 2);
  });
});
