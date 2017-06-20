function School() {
  this.roster = displayRoster;
  this.add    = addStudent;
  this.schoolGrade = {};
  this.grade = displayStudentsInGrade;
}

function displayRoster() {
  for (const grade in this.schoolGrade) {
    this.schoolGrade[grade].sort();
  }

  return this.schoolGrade;
}

function addStudent(name, grade) {
  if (!this.schoolGrade[grade]) this.schoolGrade[grade] = [];
  this.schoolGrade[grade].push(name);
}

function displayStudentsInGrade(grade) {
  if (!this.schoolGrade[grade]) return [];
  return this.schoolGrade[grade].sort();
}
module.exports = School;
