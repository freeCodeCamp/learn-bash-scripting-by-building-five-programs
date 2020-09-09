const assert = require('assert');
const { getFileContents, replaceAndRun } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "else" statement added correctly', async () => {
    const scriptFile = await getFileContents('../bingo.sh');
    const re = /75\s*\+\s*1/g;
    const output = await replaceAndRun('../bingo.sh', re, '15+61');

    assert(/else\s+echo[ \t]+\$TEXT O:\$NUMBER\s+/gm.test(scriptFile) && /^The next number is, O:\d{1,2}$/gm.test(output));
  });
});
