const assert = require('assert');
const { getFileContents, replaceAndRun } = require('./utils');

describe('Your script', () => {
  it('should "echo" the suggested text correctly', async () => {
    const scriptFile = await getFileContents('../fortune.sh');
    const re = /%[ \t]*6/gm;
    const output = await replaceAndRun('../fortune.sh', re, '%1');

    assert(/^\s*echo[ \t]+\${RESPONSES\[\$N\]}[ \t]*;?\s*$/gm.test(scriptFile) && /^Yes\s*$/gm.test(output));
  });
});
