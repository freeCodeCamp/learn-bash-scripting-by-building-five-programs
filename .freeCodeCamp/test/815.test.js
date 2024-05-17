const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should "echo" the correct title', async () => {
    const output = await getCommandOutput('./bingo.sh');

    assert(/^\n~~ Bingo Number Generator ~~\n{2}/g.test(output));
  });
});
