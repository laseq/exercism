function List(list) {
  this.list = list;
  this.compare = compareList.bind(this);
}

function compareList(listToCompare) {
  let listOne = [];
  let listTwo = [];

  if (this.list) listOne = this.list;
  if (listToCompare.list) listTwo = listToCompare.list;

  return (checkEquality(listOne, listTwo) || checkSublist(listOne, listTwo) || checkSuperlist(listOne, listTwo));
}

function checkEquality(listOne, listTwo) {
  if (listOne.length !== listTwo.length) return false;
  for (let i=0; i<listOne.length; i++) {
    if (listOne[i] !== listTwo[i]) {
      return 'UNEQUAL';
    }
  }
  return 'EQUAL';
}

function checkSublist(listOne, listTwo) {
  if (!listOne.length && listTwo.length) return 'SUBLIST';
  if ((listOne.length < listTwo.length) && checkElementsExist(listOne, listTwo))  {
    return 'SUBLIST';
  } else if((listOne.length < listTwo.length) && !checkElementsExist(listOne, listTwo)) {
    return 'UNEQUAL';
  }
}

function checkSuperlist(listOne, listTwo) {
  if (listOne.length && !listTwo.length) return 'SUPERLIST';
  if ((listOne.length > listTwo.length) && checkElementsExist(listTwo, listOne))  {
    return 'SUPERLIST';
  } else if((listOne.length > listTwo.length) && !checkElementsExist(listTwo, listOne)) {
    return 'UNEQUAL';
  }
}

function checkElementsExist(array1, array2) {
  const string1 = array1.join(',');
  const string2 = array2.join(',');
  return string2.includes(string1);
}

module.exports = List;
