const assert = require('assert');
const { getCommandOutput, getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "if" statement added correctly', async () => {
    const scriptFile = await getFileContents('../countdown.sh');
    const output1 = await getCommandOutput('./countdown.sh arg1');
    const output2 = await getCommandOutput('./countdown.sh');

    assert(!/echo[ \t]+\$1/g.test(scriptFile) && /^true$/gm.test(output1) && !/^true$/gm.test(output2));
  });
});
