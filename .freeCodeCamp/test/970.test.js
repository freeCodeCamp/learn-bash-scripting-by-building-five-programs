const assert = require('assert');
const { getFileContents, replaceAndRun } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "elif" statement added correctly', async () => {
    const scriptFile = await getFileContents('../bingo.sh');
    const re = /75\s*\+\s*1/g;
    const output = await replaceAndRun('../bingo.sh', re, '15+31');

    assert(/elif[ \t]+\(\([ \t]*\$?NUMBER[ \t]*<[ \t]*46[ \t]*\)\)/gm.test(scriptFile) && /^The next number is, N:\d{1,2}$/gm.test(output));
  });
});
