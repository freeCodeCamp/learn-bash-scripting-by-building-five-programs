const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "for" loop added correctly', async () => {
    const output = await getCommandOutput('./countdown.sh 1');

    assert(/^1\n0\n$/g.test(output));
  });
});
