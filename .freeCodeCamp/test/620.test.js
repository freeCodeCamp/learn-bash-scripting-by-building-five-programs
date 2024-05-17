const assert = require('assert');
const { getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "for" loop added correctly', async () => {
    const output = await getCommandOutput('./countdown.sh 3');

    assert(/^3\n2\n1\n$/g.test(output));
  });
});
