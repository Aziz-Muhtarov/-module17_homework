const reverseFunc = require('./testExamples');
const multiply = require('./multiply');
const checkMonths = require('./checkMonths');


xdescribe((''), () => {
  it('reverse string result', () => {
    expect(reverseFunc('kurva')).toBe('avruk');
  })

});

xdescribe(('corner case'), () => {
  it('multiply 1 * 0 to equal 1', () => {
    expect(multiply(1, 0)).toBe(0);
  })

});

describe('func for checking months acc entered number', () => {
  it('should correctly show month acc entered number index', () => {
    expect(checkMonths(2)).toBe('февраль');
  }),

  it('in case of wrong entering numbers', () => {
    expect(checkMonths(13)).toBe("Entered wrong numbers");
  })

  it('in case of wrong type enteret types', () => {
    expect(checkMonths('January')).toBe("неправильный тип данных");
  })
})