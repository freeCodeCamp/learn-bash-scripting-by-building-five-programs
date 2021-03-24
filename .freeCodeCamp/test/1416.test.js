const assert = require('assert');
const { getFileContents, getScriptOutput } = require('./utils');

describe('Your script', () => {
  it('should call your function correctly', async () => {
    const scriptFile = await getFileContents('../fortune.sh');
    const output = await getScriptOutput('./fortune.sh', ['test', 'test?']);

    assert(/Ask a yes or no question:\s*Try again\. Make sure it ends with a question mark:/g.test(output) && scriptFile.match(/GET_FORTUNE/gm).length > 2);
  });
});
