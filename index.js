// We can learn about the call(), apply(), bind() methods in JS

const wizard = {
  name: 'Merilin',
  health: 50,
  heal(num1, num2) {
    return this.health += num1 + num2;
  }
}

const archer = {
  name: 'Robin Hood',
  health: 30
}

console.log('1', archer);
wizard.heal.call(archer, 50, 30)   // !important - archer borrows a function from wizard using call()
wizard.heal.apply(archer, [50,30]) // Difference from call - accepts an array of parameters
const healArcher = wizard.heal.bind(archer, 50, 30) // bind() returns a function with certain context, parameters, and 'this' keyword
healArcher()
console.log('2', archer);



// Exercise
// How would you implement this
const array = [1, 2, 3];
function getMaxNumber(arr) {
  //code here
  console.log(Math.max.apply(this, arr));
}

getMaxNumber(array) // should return 3


// Function currying - only partially giving a function, a parameter
function multiply(a, b, c) {
  return a*b*c;
}

const multiplyByTen = multiply.bind(this, 2, 5);
console.log(multiplyByTen(3))