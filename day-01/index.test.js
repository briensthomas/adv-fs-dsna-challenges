const { reverseSentence, titleCase, oddishOrEvenish, at } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });

  describe('titleCase', () => { 
    it('should return a sentence in title case', () => {
      expect(titleCase('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
    });
  });

  describe('oddishOrEvenish', () => { 
    it('should return output for the sum of all numbers', () => {
      expect(oddishOrEvenish(121)).toBe('Evenish');
      expect(oddishOrEvenish(41)).toBe('Oddish');
    });
  });

  describe('at', () => {
    it('should return the value of the array at the specified index', () => {
      expect(at['a', 'b', 'c', 'd', 'e'], 1).toBe('b');
      expect(at['a', 'b', 'c', 'd', 'e'], - 2).toBe('d');
    });
  });
});
