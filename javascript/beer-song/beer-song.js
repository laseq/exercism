function BeerSong() {
  this.verse = verse;
  this.sing = sing;
}

function verse(number) {
  const verseObj = new NumbersToVerses(number);
  switch (number) {
    case 0:
      return verseObj.noMore;
    case 1:
      return verseObj.one;
    case 2:
      return verseObj.two;
    default:
      return verseObj.many;
  }
}

function NumbersToVerses(number) {
  this.number = number;
  this.many = `${this.number} bottles of beer on the wall, ${this.number} bottles of beer.\nTake one down and pass it around, ${this.number-1} bottles of beer on the wall.\n`;
  this.two = `${this.number} bottles of beer on the wall, ${this.number} bottles of beer.\nTake one down and pass it around, ${this.number-1} bottle of beer on the wall.\n`;
  this.one = `${this.number} bottle of beer on the wall, ${this.number} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
  this.noMore = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
}

function sing(firstVerse, lastVerse) {
  if (!lastVerse) lastVerse = 0;
  let songString = '';
  for (let i=firstVerse; i>=lastVerse; i--) {
    if (i!==firstVerse) songString = songString.concat('\n');
    songString = songString.concat(verse(i));
  }
  return songString;
}

module.exports = BeerSong;
