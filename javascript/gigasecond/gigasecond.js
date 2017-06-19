function Gigasecond(startDate) {
  this.startDate = startDate;
  this.date = calcEndDate;
}

function calcEndDate() {
  const gigaSecond = Math.pow(10,12);
  return new Date(this.startDate.getTime() + gigaSecond);
}

module.exports = Gigasecond;
