// let myName = "Baatarvan";

// primitive type
// number /int, float 3.4/
// string ''
// boolean true false
// null;
// undefined;

//  non-primitive type
// array
// function
// object

// Array

const carBrands = ["BMW", "TOYOTA", "BENZ", "FORD"];

const length = carBrands.length;

// LOOP

for (let i = 0; i < length; i++) {
  //   const myBrand = "my brand is " + carBrands[i];
  const myBrand = `my brand is ${carBrands[i]}`;
}

function greetings(a) {
  console.log("hello " + a);
}

function myFunc(value) {
  return value;
}

// function sum(a, b) {
//   return a + b;
// }

const sum = (a, b) => a + b;

const result = sum(1, 2);
console.log(result);
