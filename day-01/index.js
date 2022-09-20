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
    const item = arr[index];
    console.log('item', item);
    return item;
  } else {
    const item2 = arr[arr.length + index];
    console.log('item2', item2);
    return item2;
  }
}
module.exports = { reverseSentence, titleCase, oddishOrEvenish, at };


