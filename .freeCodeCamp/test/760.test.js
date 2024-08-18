const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should correctly have the "sleep" in the "while" loop', async () => {
    const scriptFile = await getFileContents('../countdown.sh');

    assert(/[ \t]*while[ \t]+\[\[[ \t]+\$I[ \t]+-ge[ \t]+0[ \t]+\]\][ \t]*(;\s*|;?[ \t]*\n+)[ \t]*do\s*echo[ \t]+\$I[ \t]*(;\s*|;?[ \t]*\n+)[ \t]*\(\([ \t]*I[ \t]*--[ \t]*\)\)[ \t]*(;\s*|;?[ \t]*\n+)[ \t]*sleep[ \t]+1(;\s*|;?[ \t]*\n+)[ \t]*done[ \t]*(;|[ \t]*\n+)/g.test(scriptFile));
  });
});
