const { reverseSentence, titleCase, oddishOrEvenish, at, anagrams,
  fizzBuzz, multiplesOfN, addPunctuation, addFirst, rootDigit, repeat } = require('./day01');

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

  describe('addPunctuation', () => {
    it('should add input punctuation to the end of input sentence', () => {
      const addExcitement = addPunctuation('!!!');
      const addUnsure = addPunctuation('?!?!');

      expect(addExcitement('Hello World')).toBe('Hello World!!!');
      expect(addExcitement('Pokemon, catch em all')).toBe('Pokemon, catch em all!!!');

      expect(addUnsure('Hello World')).toBe('Hello World?!?!');
      expect(addUnsure('Pokemon, catch em all')).toBe('Pokemon, catch em all?!?!');
    });
  });

  describe('addFirst', () => {
    it('should take an element, and an array, and push the element and the array to a new array', () => {

      expect(addFirst('orange')(['red', 'blue', 'green'])).toEqual(['orange', 'red', 'blue', 'green']);
      expect(addFirst('orange')(['blue', 'blue', 'blue'])).toEqual(['orange', 'blue', 'blue', 'blue']);

      expect(addFirst('cat')(['dog', 'bird', 'lizard'])).toEqual(['cat', 'dog', 'bird', 'lizard']);
      expect(addFirst('cat')(['lizard', 'donkey', 'whale'])).toEqual(['cat', 'lizard', 'donkey', 'whale']);
    });
  });

  describe('rootDigit', () => {
    it('takes a number and returns the sum of all digits in the number', () => {

      expect(rootDigit(123)).toBe('6');
      expect(rootDigit(4322)).toBe('2');
      expect(rootDigit(999888777)).toBe('9');
    });
  });

  describe('repeat', () => {
    it('repeats a string, n amount of times', () => {
      
      expect(repeat('ab', 3)).toBe('ababab');
      expect(repeat('kiwi', 1)).toBe('kiwi');
      expect(repeat('cherry', 2)).toBe('cherrycherry');
    });
  });
});
