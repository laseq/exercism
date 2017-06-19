function FoodChain() {
  this.verse = verse;
}

function verse(num) {
  let songLyrics = '';
  switch (num) {
    case 1:
      songLyrics = `${lyrics.base} fly.\n${lyrics.fly}`;
      break;
    default:
      songLyrics = 'Something went wrong';
  }
  return songLyrics;
}

const lyrics = {
  base: 'I know an old lady who swallowed a',
  fly: 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
};

module.exports = FoodChain;
