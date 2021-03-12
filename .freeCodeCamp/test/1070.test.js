const assert = require('assert');
const { getLastCommand, getCommandOutput } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand(0, false);    
    const output = await getCommandOutput(`${lastCommand}\ndeclare -p ARR`)

    assert(output === 'declare -a ARR=([0]="a" [1]="b" [2]="c")\n');
  });
});
