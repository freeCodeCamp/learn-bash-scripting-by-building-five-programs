const assert = require('assert');
const { getFileContents, appendAndRun } = require('./utils');

describe('Your script', () => {
  it('should have the correct variable added', async () => {
    const scriptFile = await getFileContents('../fortune.sh');
    const output = await appendAndRun('../fortune.sh', 'echo $N');

    assert(/^\s*N=('|"|)\$\(\([ \t]*\$?RANDOM[ \t]*%[ \t]*6[ \t]*\)\)\1[ \t]*;?\s*$/gm.test(scriptFile) && /^\d{1}$/gm.test(output));
  });
});
