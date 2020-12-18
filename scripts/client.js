console.log('Hello Cullen');

//
// EQUALS OPERATOR
// ==============================

const numberOfLikes = 3;
const numOfNotSoLike = '3';
let tester = '3';

// = - setting value
// == - value equals but not type
// === - value and type equals

if (numberOfLikes === numOfNotSoLike && tester === numOfNotSoLike) {
  console.log('IT WORKS!!!');
}


//
// LOOPS & ARRAYS
// ==============================

const listOfThings = [3, 6, 7, 24];
// start at a 0 index
// 0: 3
// 1: 6
// 2: 7
// 3: 24
console.log(listOfThings[2]);

// how many items are in our array
// 4 length
console.log(listOfThings.length);


//
// LOOP TYPE: for i
// ------------------------------

// console.log(listOfThings);
for (let i = 0; i < listOfThings.length; i++) {
  console.log(listOfThings[i]);
  console.log('i:', i);
}


//
// LOOP TYPE: for in[dex]
// ------------------------------
console.log('============');

for (let index in listOfThings) {
  console.log(listOfThings[index]);
  console.log('index:', index);
}


//
// LOOP TYPE: for of
// ------------------------------
console.log('============');

for (let item of listOfThings) {
  console.log(item);
}


//
// LOOP TYPE: while
// ------------------------------
console.log('============');

let iteration = 2;

while (iteration < 9) {
  console.log(iteration);
  iteration++;
}
console.log(iteration);
