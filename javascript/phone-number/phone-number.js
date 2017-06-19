function PhoneNumber(unformattedNumber) {
  this.unformatted = unformattedNumber;
  this.number = formatNumber;
  this.areaCode = getAreaCode;
  this.toString = formatNumberString;
}

function formatNumber() {
  const phoneNumber = removeUnwantedChars(this.unformatted);
  if (phoneNumber.length > 11 || phoneNumber.length < 10) return fillInvalidNumber();
  if (phoneNumber.length >10 && phoneNumber[0] !== '1') return fillInvalidNumber();

  if (phoneNumber.length >10 && phoneNumber[0] === '1') {
    return phoneNumber.split('').splice(1).join('');
  }
  return phoneNumber;
}

function fillInvalidNumber() {
  return new Array(10).fill('0').join('');
}

function removeUnwantedChars(string) {
  return string.replace(/[-)(.\s]/g, '');
}

function getAreaCode(phoneNumber) {
  if (this.unformatted) {
    phoneNumber = removeUnwantedChars(this.unformatted);
  }
  return phoneNumber.substr(-10, 3);
}

function getExchangeCode(phoneNumber) {
  return phoneNumber.substr(-7, 3);
}

function getSubscriberNumber(phoneNumber) {
  return phoneNumber.substr(-4, 4);
}

function formatNumberString() {
  const phoneNumber = this.unformatted;
  const areaCode = getAreaCode(phoneNumber);
  const exchangeCode = getExchangeCode(phoneNumber);
  const subscriberNumber = getSubscriberNumber(phoneNumber);
  return `(${areaCode}) ${exchangeCode}-${subscriberNumber}`;
}

module.exports = PhoneNumber;
