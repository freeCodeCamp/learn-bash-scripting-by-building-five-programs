const assert = require('assert');
const { getFileContents, getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should "echo" the suggested text correctly', async () => {
    const scriptFile = await getFileContents('../fortune.sh');
    const output = await getCommandOutput('./fortune.sh');

    assert(/^\s*echo[ \t]+\${RESPONSES\[5\]}[ \t]*;?\s*$/gm.test(scriptFile) && /^\s*Ask again later$/gm.test(output))
  });
});
