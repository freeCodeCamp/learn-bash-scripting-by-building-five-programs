const assert = require('assert');
const { replaceAndRun, getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the suggested commands added correctly', async () => {
    const scriptFile = await getFileContents('../five.sh');
    const re = /\.\/countdown\.sh[ \t]+\d+/gm;
    const output = await replaceAndRun('../five.sh', re, './countdown.sh a', { input: ['?', '?', '?', '?'] });

    const test1 = /~~ Questionnaire ~~/.test(output);
    const test2 = /~~ Countdown Timer ~~/.test(output);
    const test3 = /~~ Bingo Number Generator ~~/.test(output);
    const test4 = /~~ Fortune Teller ~~/.test(output);

    assert(test1 && test2 && test3 && test4 && /\.\/countdown\.sh[ \t]+3/g.test(scriptFile));
  });
});
