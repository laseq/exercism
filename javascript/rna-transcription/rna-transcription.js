var DnaTranscriber = function() {
  this.toRna = function(DNA) {
    if (inputValidation(DNA) === true) {
      return DNA.split('').map(multipleDnaToRna).join('');
    }
  };
};

const DnaToRnaMap = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

function multipleDnaToRna(value) {
  return DnaToRnaMap[value];
}

function inputValidation(DNA) {
  let invalidCount = 0;
  for (let i=0; i<DNA.length; i++) {
    if (!DNA[i].match(/(G|C|T|A)/)) {
      invalidCount++;
    }
  }
  if (invalidCount > 0) {
    throw new Error('Invalid input');
  }
  return true;
}

module.exports = DnaTranscriber;
