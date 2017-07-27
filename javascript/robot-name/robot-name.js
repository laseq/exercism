function Robot() {
  this.name = getRobotName();
  this.reset = resetRobotName.bind(this);
}

const usedNames = {};

function resetRobotName() {
  removeNameFromTracker(this.robotname);
  this.name = getRobotName();
}

function removeNameFromTracker(name) {
  if (usedNames.hasOwnProperty(name)) {
    delete usedNames[name];
  }
}

function getRobotName() {
  const letters = generateRandomLetters();
  const numbers = generateRandomNumbers();
  const name = letters + numbers;

  if (usedNames.hasOwnProperty(name)) {
    return getRobotName();
  } else {
    usedNames[name] = true;
    this.robotname = name;
    return name;
  }
}

function generateRandomLetters() {
  // ASCII codes are from A:65 to Z:90
  const letterArray = [];
  for (let i=0; i<2; i++) {
    const randomAscii = Math.floor(Math.random()*(90-65+1))+65;
    letterArray[i] = String.fromCharCode(randomAscii);
  }
  const letterString = letterArray.join('');
  return letterString;
}

function generateRandomNumbers() {
  const numArray = [];
  for (let i=0; i<3; i++) {
    numArray[i] = Math.floor(10*Math.random());
  }
  const numString = numArray.join('');
  return numString;
}

module.exports = Robot;
