const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should "echo" the suggested text correctly', async () => {
    const output = await getCommandOutput('./fortune.sh');

    assert(/^\n~~ Fortune Teller ~~\n{2}/g.test(output));
  });
});
