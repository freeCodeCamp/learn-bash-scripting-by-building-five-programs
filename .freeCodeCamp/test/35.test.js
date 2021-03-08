const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should run your script with the "sh" command', async () => {
    const cwd = await getCwd();
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'sh' && lastCommand[1] === 'questionnaire.sh' && cwd === '/home/strove/project');
  });
});
