function Anagram(word) {
  this.word = word;
  this.matches = showValidWords;
}

function showValidWords(wordArray) {
  if (wordArray.constructor !== Array) {
    wordArray = [].slice.apply(arguments);
  }
  const matchingWords = [];
  const sortedOriginalWord = this.word.toLowerCase().split('').sort().join('');

  wordArray.forEach(word => {
    const sortedWord = word.toLowerCase().split('').sort().join('');
    if (sortedOriginalWord === sortedWord && this.word.toLowerCase() !== word.toLowerCase()) {
      matchingWords.push(word);
    }
  });

  return matchingWords;
}

module.exports = Anagram;
