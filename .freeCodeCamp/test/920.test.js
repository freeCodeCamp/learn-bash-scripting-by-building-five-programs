/*describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand();
    const joined = lastCommand.join('');
    const joinedTest = joined === 'NUM=$((RANDOM%75+1))' || joined === 'NUM=$((RANDOM%75+1));';
    const first = lastCommand.find(str => /NUM=\$\(\(/.test(str));
    const second = lastCommand.find(str => /\)\)/.test(str));

    assert(joinedTest && first && second);
  });
});*/
