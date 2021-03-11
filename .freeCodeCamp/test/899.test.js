/*const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand();
    const math = lastCommand.splice(1).join('');
    const mathTest = math === '$((I+4))' || math === '$((I+4));';
    const first = lastCommand.find(str => /\$\(\(/.test(str));
    const second = lastCommand.find(str => /\)\)/.test(str));

    assert(lastCommand[0] === 'echo' && mathTest && first && second);
  });
});*/
