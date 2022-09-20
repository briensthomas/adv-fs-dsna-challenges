const { reverseSentence, titleCase, oddishOrEvenish, at, anagrams,
  fizzBuzz, multiplesOfN } = require('./index');

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
      const array1 = at(['a', 'b', 'c', 'd', 'e'], 1);
      const array2 = at(['a', 'b', 'c', 'd', 'e'], - 2);

      expect(array1).toBe('b');
      expect(array2).toBe('d');
    });
  });

  describe('anagrams', () => {
    it('should return true if the words are anagrams', () => {
      expect(anagrams('superintended', 'unpredestined')).toBe(true);
      expect(anagrams('pictorialness', 'documentarily')).toBe(false);
    });
  });

  describe('fizz-buzz', () => {
    it('prints fizz if divisible by 3, buzz for numbers divisible by 5, fizzbuzz for both', () => {
      
      expect(fizzBuzz(16)).toEqual(
        [
          1, 2, 'Fizz', 4, 'Buzz', 
          'Fizz', 7, 8, 'Fizz', 'Buzz', 
          11, 'Fizz', 13, 14, 'FizzBuzz', 
          16
        ]
      );
    });
  });

  describe('multiplesOfN', () => {
    it('multiplies the input up to a product of 50', () => {
      
      expect(multiplesOfN(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
      expect(multiplesOfN(25)).toEqual([25, 50]);
      expect(multiplesOfN(75)).toEqual([]);
    });
  });
});
