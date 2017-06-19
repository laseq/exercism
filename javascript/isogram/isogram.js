function Isogram(phrase) {
  this.phrase = phrase;
  this.isIsogram = isIsogram;
}

function isIsogram() {
  const phraseArray = this.phrase.replace(/[-\s]/g, '').toLowerCase().split('');

  for (let i=0; i<phraseArray.length; i++) {
    const alteredArray = phraseArray.filter((value, index) => {
      return index !== i;
    });

    if (alteredArray.includes(phraseArray[i])) return false;
  }

  return true;
}

module.exports = Isogram;
