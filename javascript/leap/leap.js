//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
  this.year = input;
  this.contains100 = (input%100 === 0) ? true:false;
};

Year.prototype.isLeap = function() {
  if (this.contains100 && (this.year/100)%4 === 0) {
    return true;
  } else if (!this.contains100 && this.year%4 === 0) {
    return true;
  } else {
    return false;
  }

};

module.exports = Year;
