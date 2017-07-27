function ETL() {
  this.transform = convertOldToNew;
}

function convertOldToNew(oldScores) {
  const newScoring = {};
  for (const score in oldScores) {
    for (let i=0; i<oldScores[score].length; i++) {
      const letter = oldScores[score][i].toLowerCase();
      newScoring[letter] = parseInt(score);
    }
  }
  return newScoring;
}

module.exports = ETL;
