function reverseSentence(str) {
  return str
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

}


module.exports = { reverseSentence, titleCase, oddishOrEvenish, at, anagrams };


