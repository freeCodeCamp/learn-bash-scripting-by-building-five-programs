const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should "echo" the correct title', async () => {
    const output = await getCommandOutput('./countdown.sh 1');

    assert(/^\n~~ Countdown Timer ~~\n{2}1\n0\n/g.test(output));
  });
});
