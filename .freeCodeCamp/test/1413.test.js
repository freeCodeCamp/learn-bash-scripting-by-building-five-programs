const assert = require('assert');
const { getFileContents, getScriptOutput } = require('./utils');

describe('Your script', () => {
  it('should call the suggested function correctly', async () => {
    const scriptFile = await getFileContents('../fortune.sh');
    const output = await getScriptOutput('./fortune.sh', ['test?']);

    assert(/Try again\. Make sure it ends with a question mark:/g.test(output) && /GET_FORTUNE[ \t]+again[ \t]*;?/g.test(scriptFile));
  });
});
