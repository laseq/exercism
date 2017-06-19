var Pangram = function(phrase) {
  this.isPangram = function() {
    return checkPangram(phrase);
  };
};

var CharacterStore = {};

function checkPangram(phrase) {
  if (!phrase) return false;

  initCharacters();

  phrase.toLowerCase().split('').forEach(char => {
    if (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123) {
      CharacterStore[char]++;
    }
  });

  for (const key in CharacterStore) {
    if (CharacterStore[key] === 0) return false;
  }

  return true;
}

function initCharacters() {
  // Using ASCII numbers from 97 to 122 here
  for (let i=97; i<123; i++) {
    CharacterStore[String.fromCharCode(i)] = 0;
  }
}

module.exports = Pangram;
