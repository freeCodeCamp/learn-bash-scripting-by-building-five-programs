const assert = require('assert');
const { getCommandOutput, getFileContents } = require('./utils');

describe('Your script', () => {
  it('should call the suggested fuction correctly', async () => {
    const scriptFile = await getFileContents('../fortune.sh');
    const output = await getCommandOutput('./fortune.sh');

    assert(scriptFile.match(/GET_FORTUNE/g).length > 1 && /Ask a yes or no question:/gm.test(output));
  });
});
