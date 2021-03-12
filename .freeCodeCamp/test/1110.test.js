const assert = require('assert');
const { appendAndRun } = require('./utils');

describe('Your script', () => {
  it('should have the correct array variable added', async () => {
    const output = await appendAndRun('../fortune.sh', 'declare -p RESPONSES');

    assert(/^\s*declare -a RESPONSES=\(\[0\]="Yes" \[1\]="No" \[2\]="Maybe" \[3\]="Outlook good" \[4\]="Don't count on it" \[5\]="Ask again later"\)\s*$/gm.test(output));
  });
});
