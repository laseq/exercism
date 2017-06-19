function Bob() {
  this.hey = function bobsResponse(message) {
    message = removeUnwantedChars(message);
    if (checkAllCaps(message)) return 'Whoa, chill out!';
    if (checkNormalSentence(message)) return 'Whatever.';
    if (checkQuestion(message)) return 'Sure.';
    if (checkNothingSaid(message)) return 'Fine. Be that way!';
  };
}

function checkQuestion(message) {
  return message.endsWith('?');
}

function checkNothingSaid(message) {
  return (message.trim() === '') ? true:false;
}

function checkNormalSentence(message) {
  if (checkQuestion(message) || checkNothingSaid(message)) return false;

  for (let i=0; i<message.length; i++) {
    if (checkLowerCaseChar(message, i)) return true;
  }
}

function checkLowerCaseChar(message, i) {
  if ((message.charCodeAt(i) > 96 && message.charCodeAt(i) < 123) || !isNaN(parseInt(message[i])) || message[i] === '\xfc' || message[i] === '\xe4') return true;
  return false;
}

function checkAllCaps(message) {
  message = removeEndingPunctuation(message);
  message = message.replace(/[0-9!]+/g, '');
  if (message === '') return false;

  for (let i=0; i<message.length; i++) {
    if (!checkUpperCaseChar(message, i)) return false;
  }

  return true;
}

function checkUpperCaseChar(message, i) {
  if ((message.charCodeAt(i) > 64 && message.charCodeAt(i) < 91) || message[i] === '\xdc' || message[i] === '\xc4') return true;
  return false;
}

function removeEndingPunctuation(message) {
  if (checkQuestion(message) || message.endsWith('!')) {
    message = message.slice(0, message.length-1);
  }
  return message;
}

function removeUnwantedChars(message) {
  return message.replace(/[,\s%^*@#$(*^]+/g, '');
}

module.exports = Bob;
