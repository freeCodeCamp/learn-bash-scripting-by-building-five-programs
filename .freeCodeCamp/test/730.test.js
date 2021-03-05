const assert = require('assert');
const { getFileContents, appendAndRun } = require('./utils');

describe('Your script', () => {
  it('should have the suggested variable added correctly', async () => {
    const scriptFile = await getFileContents('../countdown.sh');
    const output = await appendAndRun('../countdown.sh', 'echo $I', { args: [1] });

    assert(/1/g.test(output) && /I=('|"|)\$1\1/.test(scriptFile));
  });
});
