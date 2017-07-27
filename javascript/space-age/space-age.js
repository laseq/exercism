function SpaceAge(seconds) {
  this.seconds = seconds;
  this.onEarth = earthAge;
  this.onMercury = mercuryAge;
  this.onVenus = venusAge;
  this.onMars = marsAge;
  this.onJupiter = jupiterAge;
  this.onSaturn = saturnAge;
  this.onUranus = uranusAge;
  this.onNeptune = neptuneAge;
}

const orbits = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

function earthAge() {
  return Number((earthYears(this.seconds)).toFixed(2));
}

function mercuryAge() {
  return Number((earthYears(this.seconds)/orbits.mercury).toFixed(2));
}

function venusAge() {
  return Number((earthYears(this.seconds)/orbits.venus).toFixed(2));
}

function marsAge() {
  return Number((earthYears(this.seconds)/orbits.mars).toFixed(2));
}

function jupiterAge() {
  return Number((earthYears(this.seconds)/orbits.jupiter).toFixed(2));
}

function saturnAge() {
  return Number((earthYears(this.seconds)/orbits.saturn).toFixed(2));
}

function uranusAge() {
  return Number((earthYears(this.seconds)/orbits.uranus).toFixed(2));
}

function neptuneAge() {
  return Number((earthYears(this.seconds)/orbits.neptune).toFixed(2));
}

function earthYears(seconds) {
  return (seconds/60/60/24/365.25);
}

module.exports = SpaceAge;
