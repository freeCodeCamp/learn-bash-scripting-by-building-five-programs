const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand(0, false);

    assert(/^\s*\[\[[ \t]+("|)test\?\1[ \t]+=~[ \t]+\\\?\$[ \t]+\]\][ \t]*;[ \t]*echo[ \t]+\$\?[ \t]*;?\s*$/.test(lastCommand));
  });
});
