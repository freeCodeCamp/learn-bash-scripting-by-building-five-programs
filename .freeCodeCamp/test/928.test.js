const assert = require('assert');
const { getFileContents, getCommandOutput } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable', async () => {
    const scriptFile = await getFileContents('../bingo.sh');
    const output = await getCommandOutput('./bingo.sh');

    assert(/^\s*NUMBER=('|"|)\$\(\([ \t]*\$?RANDOM[ \t]*%[ \t]*75[ \t]*\+[ \t]*1[ \t]*\)\)\1[ \t]*;?\s*$/gm.test(scriptFile) && /^\d{1,2}$/gm.test(output));
  });
});
