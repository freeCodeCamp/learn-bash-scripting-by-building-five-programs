describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand();
    const joined = lastCommand.join('');
    const joinedTest = joined === 'J=$((I-6))' || joined === 'J=$((I-6));';
    const first = lastCommand.find(str => /J=\$\(\(/.test(str));
    const second = lastCommand.find(str => /\)\)/.test(str));

    assert(joinedTest && first && second);
  });
});
