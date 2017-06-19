function FoodChain() {
  this.verse = verse;
  this.verses = verses;
}

function verse(num) {
  let songLyrics = '';
  const lyricsObj = new Lyrics(creatureMap[num]);

  if (typeof specialLyrics[creatureMap[num]] === 'string') {
    songLyrics = `${lyricsObj.base}${specialLyrics[creatureMap[num]]}${lyricsObj[creatureMap[num]]}`;
  } else {
    songLyrics = `${lyricsObj.base}${lyricsObj[creatureMap[num]]}`;
  }

  return songLyrics;
}

function verses(num1, num2) {
  let songLyrics = '';
  for (let i=num1; i<=num2; i++) {
    const lyricsObj = new Lyrics(creatureMap[i]);
    if (typeof specialLyrics[creatureMap[i]] === 'string') {
      songLyrics += `${lyricsObj.base}${specialLyrics[creatureMap[i]]}${lyricsObj[creatureMap[i]]}\n`;
    } else {
      songLyrics += `${lyricsObj.base}${lyricsObj[creatureMap[i]]}\n`;
    }
  }
  return songLyrics;
}

function Lyrics(creature) {
  this.creature = creature;
  this.base = `I know an old lady who swallowed a ${this.creature}.\n`;
  this.fly = 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
  this.spider = `She swallowed the spider to catch the fly.\n${this.fly}`;
  this.bird = `She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n${this.spider}`;
  this.cat = `She swallowed the cat to catch the bird.\n${this.bird}`;
  this.dog = `She swallowed the dog to catch the cat.\n${this.cat}`;
  this.goat = `She swallowed the goat to catch the dog.\n${this.dog}`;
  this.cow = `She swallowed the cow to catch the goat.\n${this.goat}`;
  this.horse = `She\'s dead, of course!\n`;
}

const specialLyrics = {
  spider: 'It wriggled and jiggled and tickled inside her.\n',
  bird: 'How absurd to swallow a bird!\n',
  cat: 'Imagine that, to swallow a cat!\n',
  dog: 'What a hog, to swallow a dog!\n',
  goat: 'Just opened her throat and swallowed a goat!\n',
  cow: 'I don\'t know how she swallowed a cow!\n'
};

const creatureMap = {
  1: 'fly',
  2: 'spider',
  3: 'bird',
  4: 'cat',
  5: 'dog',
  6: 'goat',
  7: 'cow',
  8: 'horse'
};

module.exports = FoodChain;
