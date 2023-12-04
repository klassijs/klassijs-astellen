const { SBF } = require('../index');

describe('switchboardFactory', () => {
  it('should get a value from the switchboard', () => {
    SBF.set('key1', 'value1');
    const result = SBF.get('key1');
    expect(result).toBe('value1');
  });

  it('should set a value in the switchboard', () => {
    SBF.set('key2', 'value2');
    const result = SBF.get('key2');
    expect(result).toBe('value2');
  });

  it('should get an initial value from the switchboard', () => {
    const result = SBF.get('alreadyFailed');
    expect(result).toBe(false);
  });

  it('should set and get a boolean value from the switchboard', () => {
    SBF.set('key3', true);
    const result = SBF.get('key3');
    expect(result).toBe(true);
  });
});