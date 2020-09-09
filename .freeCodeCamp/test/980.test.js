const assert = require('assert');
const { getFileContents, replaceAndRun } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "elif" statement added correctly', async () => {
    const scriptFile = await getFileContents('../bingo.sh');
    const re = /75\s*\+\s*1/g;
    const output = await replaceAndRun('../bingo.sh', re, '15+46');

    assert(/elif[ \t]+\[\[[ \t]+\$NUMBER[ \t]+-lt[ \t]+61[ \t]+\]\]/gm.test(scriptFile) && /^The next number is, G:\d{1,2}$/gm.test(output));
  });
});
