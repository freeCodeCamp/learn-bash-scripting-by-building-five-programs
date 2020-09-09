const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand(0, false);

    assert(/^\s*\[\[[ \t]+('|")hello world\1[ \t]+=~[ \t]+('|")lo wor\2[ \t]+\]\][ \t]*;[ \t]*echo[ \t]+\$\?[ \t]*;?\s*$/.test(lastCommand));
  });
});
