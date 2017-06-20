function School() {
  this.roster = displayRoster;
  this.add    = addStudent;
  this.schoolGrade = {};
  this.grade = displayStudentsInGrade;
}

// const schoolGrade = {};

function displayRoster() {
  return this.schoolGrade;
}

function addStudent(name, grade) {
  // if (typeof this.schoolGrade[grade] !== 'object') this.schoolGrade[grade] = [];
  if (!this.schoolGrade[grade]) this.schoolGrade[grade] = [];
  this.schoolGrade[grade].push(name);
}

function displayStudentsInGrade(grade) {
  if (!this.schoolGrade[grade]) return [];
  return this.schoolGrade[grade].sort();
}
module.exports = School;
