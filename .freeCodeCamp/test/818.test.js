const assert = require('assert');
const { getCommandOutput } = require('./utils');
describe('Your script', () => {
  it('should "echo" the suggested variable correctly', async () => {
    const output = await getCommandOutput('./bingo.sh');
    assert(/5/g.test(output));
  });
});
