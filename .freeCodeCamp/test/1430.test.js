const assert = require('assert');
const { getLastCommand, getDirectoryContents, getCwd } = require('./utils');

describe('You', () => {
  it('should use the "touch" command to create the correct file', async () => {
    const cwd = await getCwd();
    const directoryContents = await getDirectoryContents(`..`);
    const lastCommand = await getLastCommand();

    assert(directoryContents.includes('five.sh') && lastCommand[0] === 'touch' && /five.sh/g.test(lastCommand[1]) && cwd === '/home/strove/project');
  });
});
