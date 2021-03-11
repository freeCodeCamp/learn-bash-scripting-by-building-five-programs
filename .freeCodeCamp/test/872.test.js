const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand();
    const joined = lastCommand.join('');
    const joinedTest = joined === '(($RANDOM%75))' || joined === '(($RANDOM%75))';
    const first = lastCommand.find(str => /\(\(/.test(str));
    const second = lastCommand.find(str => /\)\)/.test(str));

    assert(joinedTest && first && second);
  });
});
