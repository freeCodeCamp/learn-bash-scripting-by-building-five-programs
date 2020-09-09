const assert = require('assert');
const { getFileContents, appendAndRun } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const scriptFile = await getFileContents('../bingo.sh');
    const output = await appendAndRun('../bingo.sh', 'echo $TEXT');

    assert(/^\s*TEXT=('|"|)The next number is, \1[ \t]*;?\s*$/gm.test(scriptFile) && /^The next number is,$/gm.test(output));
  });
});
