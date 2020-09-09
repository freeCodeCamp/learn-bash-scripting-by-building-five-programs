const assert = require('assert');
const { getFileContents, appendAndRun } = require('./utils');
describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const scriptFile = await getFileContents('../bingo.sh');
    const output = await appendAndRun('../bingo.sh', 'echo $NUMBER');
    assert(/^\s*NUMBER=('|"|)5\1[ \t]*;?[ \t]*$/gm.test(scriptFile) && /^5$/gm.test(output));
  });
});
