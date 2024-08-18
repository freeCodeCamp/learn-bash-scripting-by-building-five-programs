const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested "while" loop added correctly', async () => {
    const scriptFile = await getFileContents('../countdown.sh');

    assert(/[ \t]*while[ \t]+\[\[[ \t]+\$I[ \t]+-ge[ \t]+0[ \t]+\]\][ \t]*(;\s*|;?[ \t]*\n+)[ \t]*do\s*echo[ \t]+\$I[ \t]*(;\s*|;?[ \t]*\n+)[ \t]*done[ \t]*(;|[ \t]*\n+)/g.test(scriptFile));
  });
});
