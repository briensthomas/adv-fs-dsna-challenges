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
module.exports = { reverseSentence, titleCase };
