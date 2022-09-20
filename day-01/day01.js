function reverseSentence(string) {
  return string
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function titleCase(sentence) {
  return sentence
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');

}

function oddishOrEvenish(number) {
  const a = number
    .toString();
  let b = 0;
  for (let i = 0; i < a.length; i++) {
    b += parseInt(a[i]);
  }
  if (b % 2 === 0) {
    return 'Evenish';
  } else {
    return 'Oddish';
  }
}

function at(arr, index) {
  if (index >= 0) {
    return arr[index];
  } else {
    return arr[arr.length + index];
  }
}

function anagrams(wordOne, wordTwo) {
  const splitOne = wordOne.split('').sort().join('');
  const splitTwo = wordTwo.split('').sort().join('');

  if (splitOne === splitTwo) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(number) {
  const numArray = [];
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      numArray.push('FizzBuzz');
    } else if (i % 5 === 0) {
      numArray.push('Buzz');
    } else if (i % 3 === 0) {
      numArray.push('Fizz');
    } else {
      numArray.push(i);
    }
  }
  return numArray;
}

function multiplesOfN(n) {
  const numArray = [];
  for (let i = 1; n <= 50; i++) {
    const multiple = i * n;
    if (i * n > 50) {
      break;
    }
    numArray.push(multiple);
  }
  return numArray;
}

function addPunctuation(punctuation) {
  return function someString(string) {
    return string + punctuation;
  };
  
}

module.exports = { reverseSentence, titleCase, oddishOrEvenish, at, anagrams,
  fizzBuzz, multiplesOfN, addPunctuation };


