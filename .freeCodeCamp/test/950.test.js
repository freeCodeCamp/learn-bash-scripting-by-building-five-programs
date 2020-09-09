const assert = require('assert');
const { getFileContents, replaceAndRun } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "if" statement added correctly', async () => {
    const scriptFile = await getFileContents('../bingo.sh');
    const re = /75/g;
    const output = await replaceAndRun('../bingo.sh', re, '15');

    assert(/^\s*if[ \t]+\(\([ \t]*\$?NUMBER[ \t]*<=[ \t]*15[ \t]*\)\)/gm.test(scriptFile) && !/echo[ \t]+\$NUMBER/.test(scriptFile) && /^The next number is, B:\d{1,2}$/gm.test(output));
  });
});
