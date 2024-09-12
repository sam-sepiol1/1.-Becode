// booleanOperations.test.js
const {
  returnTrue,
  returnFalse,
  negateBoolean,
  compareBooleans,
} = require('./03-05-data-types-boolean');

describe('JavaScript Data Types - Boolean', () => {
  test('returnTrue should return true', () => {
    expect(returnTrue()).toBe(true);
  });

  test('returnFalse should return false', () => {
    expect(returnFalse()).toBe(false);
  });

  test('negateBoolean should return the negation of the provided value', () => {
    expect(negateBoolean(true)).toBe(false);
    expect(negateBoolean(false)).toBe(true);
  });

  test('compareBooleans should return true if both booleans are equal, otherwise false', () => {
    expect(compareBooleans(true, true)).toBe(true);
    expect(compareBooleans(false, false)).toBe(true);
    expect(compareBooleans(true, false)).toBe(false);
    expect(compareBooleans(false, true)).toBe(false);
  });
});
