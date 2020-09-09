const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should have the suggested condition for your "if" statement', async () => {
    const output1 = await getCommandOutput('./countdown.sh 4');
    const output2 = await getCommandOutput('./countdown.sh 5');

    assert(/^true$/gm.test(output1) && !/^false$/.test(output1) && !/^true$/gm.test(output2) && /^false$/gm.test(output2));
  });
});
