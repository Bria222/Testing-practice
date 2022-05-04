const stringLength = require('./stringLength');
const reverseString = require('./reverseString');

describe('outer', () => {
    test('expect output character count to be 5 & more than 1', () => {
        const reversedStr = stringLength('hello');
        expect(reversedStr).toBe(5)
      });
      
      test('should be longer less than 10', () => {
          const strLength = stringLength('hellohellohello');
          expect(strLength).toMatch('Error');
      });
      
      test('should be longer than 1', () => {
          const strLength = stringLength('h');
          expect(strLength).toMatch('Count > 1');
      });
})

describe('Reverse', () => {
    test('should be a reverse str', () => {
        const reverseStr = reverseString('hello');
        expect(reverseStr).toMatch('olleh');
    });
})
