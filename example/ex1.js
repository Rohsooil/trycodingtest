const SETTING = {
  name: 'LUCKY LOTTO!',
  count: 6,
  maxNumber: 45
}
let mySet = new Set();
let { count, maxNumber } = SETTING;

for (let k = 0; k < count; k++) {
  let rdNum = getRandomNumber(maxNumber);
  if (mySet.has(rdNum)) {
    k = k - 1;
  } else {
    mySet.add(rdNum);
  }
}

function getRandomNumber(maxNumber) {
  return Math.floor(Math.random() * (maxNumber)) + 1;
}

console.log(mySet);