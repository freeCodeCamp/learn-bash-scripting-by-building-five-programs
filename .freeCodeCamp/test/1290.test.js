const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand(0, false);

    assert(/^\s*\[\[[ \t]+('|"|)hello\1[ \t]+==[ \t]+('|"|)hello\2[ \t]+\]\][ \t]*;[ \t]*echo[ \t]+\$\?[ \t]*;?\s*$/gm.test(lastCommand));
  });
});
