function List(list) {
  this.list = list;
  this.compare = compareList.bind(this);
}

function compareList(listToCompare) {
  let listOne = [];
  let listTwo = [];

  // if (this.list) listOne = numberSort(this.list);
  // if (listToCompare.list) listTwo = numberSort(listToCompare.list);
  if (this.list) listOne = this.list;
  if (listToCompare.list) listTwo = listToCompare.list;

  const result = (checkEquality(listOne, listTwo) || checkSublist(listOne, listTwo) || checkSuperlist(listOne, listTwo));
  return result;

  // if (checkEquality(listOne, listTwo) === 'EQUAL'){
  //   return 'EQUAL';
  // } else if (checkEquality(listOne, listTwo) === 'UNEQUAL') {
  //   return 'UNEQUAL';
  // }
  // if (checkSublist(listOne, listTwo) === 'SUBLIST') {
  //   return 'SUBLIST';
  // } else if (checkSublist(listOne, listTwo) === 'UNEQUAL') {
  //   return 'UNEQUAL';
  // }
  // if (checkSuperlist(listOne, listTwo) === 'SUPERLIST') {
  //   return 'SUPERLIST';
  // } else if (checkSuperlist(listOne, listTwo) === 'UNEQUAL') {
  //   return 'UNEQUAL';
  // }
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

function checkElementsExist(array1, array2) {
  // .every returns true if every element passes the test
  // return array1.every(value => {
  //   const index = array2.indexOf(value);
  //   return (index === 0) ? true : index;
  // });

  const string1 = array1.join(',');
  const string2 = array2.join(',');
  return string2.includes(string1);
}

function checkSuperlist(listOne, listTwo) {
  if (listOne.length && !listTwo.length) return 'SUPERLIST';
  if ((listOne.length > listTwo.length) && checkElementsExist(listTwo, listOne))  {
    return 'SUPERLIST';
  } else if((listOne.length > listTwo.length) && !checkElementsExist(listTwo, listOne)) {
    return 'UNEQUAL';
  }
}

function numberSort(array) {
  return array.sort((a, b) => {
    return a-b;
  });
}

module.exports = List;
