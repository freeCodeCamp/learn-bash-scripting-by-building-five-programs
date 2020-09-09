const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "if/else" statement added correctly', async () => {
    const output1 = await getCommandOutput('./countdown.sh 1');
    const output2 = await getCommandOutput('./countdown.sh 0');

    assert(/^true$/gm.test(output1) && !/^false$/.test(output1) && !/^true$/gm.test(output2) && /^false$/gm.test(output2));
  });
});
