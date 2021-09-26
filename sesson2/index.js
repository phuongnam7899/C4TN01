// assign
// let recipe = "Hello world";

// JS law
// 1.Not contain spaces
// let food recipe = 'Hello world'; X
// 2.Begin with character, _ or $
// let _recipe = 'hello' (V)
// let $recipe = 'hello' (V)
// let ?recipe = 'jello'; (X)
// 3.Case sesitive
// "recipe" is different from "Recipe"

// Common law

// 1.variable name should be in camel case
// const foodrecipe
// const Foodrecipe
// const foodRecipe
// 2. Understandable name
// const age = 19
// const yearOfBirth = 2004

// Data type
// String: "", '', ``
// Number: 1, 2, 3, 4
// Boolean: true / fasle
// const isAtSchool = true; 
// Undefined: has label but no value
// ABC is not defined => check variable's name (ABC)

// let secret;
// secret = 'this is secret'
// console.log(secret)


// Operator
// let age = 1;
// After 2 year;
// age = age + 1
// age += 1;
// age++;
// age = age - 1
// age -= 2
// age = age * 2
// age *= 2
// age = age / 2
// let surplus = age % 2;
// console.log(age)
// console.log(surplus)

// let firstName = 'Nguyen'
// let lastName = 'Nam'
// let fullName = firstName + lastName
// let fullName = firstName - lastName
// NaN: Not a number

// String template
// let appleNumber = 10;
// let pineNumber = 15;
// let bananaNumber = 20;
// let waterMelonNumber = 25;

// I have 10 apples, 15 pineapple, ..
// console.log("I have " + appleNumber + ' apples, ' + pineNumber + ' pineapples')
// console.log(`I have ${appleNumber} apples, ${pineNumber} pineapples`)

// let a = 5;
// let b = 6;
// let perimeter = (a + b) * 2

// Invert
// let isAtSchool = true;
// isAtSchool = !isAtSchool;
// isAtSchool = !isAtSchool;
// isAtSchool = !isAtSchool;
// isAtSchool = !isAtSchool;
// isAtSchool = !isAtSchool;
// isAtSchool = !isAtSchool;
// console.log(isAtSchool);

// Condition
// let age = 5;
// let isTeen = age < 18; // > , >=, <=, !==, ===, ==
// console.log(isTeen);

// let isRaining = false;
// let isWeekend = false;
// let haveFavoriteSubject = true;
// let haveTestToday = true
// // let goToSchool = !isRaining && !isWeekend
// let goToSchool = (haveFavoriteSubject || haveTestToday) && !isRaining
// console.log(goToSchool);
// if (undefined) {
//     console.log("I'll go to school");
// } else {
//     console.log("i'll stay home");
// }

// Other data type to boolean rule
// Not empty string => true  ('abc', 'a') 
// empty string => fasle  ('') 
// Number = 0 (false)
// Number !== 0 (true)
// undefined => false
// NaN => false


// Ex3

// let celcius = prompt('Enter Celcius degree')
// let kelvin = Number(celcius) + 273.15;
// console.log(kelvin);

// Ex3

// let yob = Number(prompt('Enter your year of birth'));
// let age = 2021 - yob;
// if (age < 18) {
//     console.log(`Your age is ${age}, you are teen`);
// } else {
//     console.log(`Your age is ${age}, you are adult`);
// }

// Ex4

// let number = Number(prompt('Enter a number'));

// if (number % 2 === 0) {
//     console.log('even');
// } else {
//     console.log('odd');
// }

// Ex5

// let a = Number(prompt('Enter a'));
// let b = Number(prompt('Enter b'));
// let c = Number(prompt('Enter c'));

// let x = (c - b) / a
// console.log(`x = ${x}`);


// <5: baby
// 5 - 18: teen
// 18 - 60: adult
// > 60: old

let yob = Number(prompt('Enter your year of birth'));
let age = 2021 - yob;

// if (age < 5) {
//     console.log('baby');
// } else {
//     // >= 5
//     if (age < 18) {
//         console.log('teen');
//     } else {
//         // >= 18
//         if (age < 60) {
//             console.log('adult');
//         } else {
//             // >= 60
//             console.log('old');
//         }
//     }
// }

// if (age < 5) {
//     console.log('baby');
// } else if (age < 18) {
//     // age >= 5
//     console.log('teen');
// } else if (age < 60) {
//     // age >= 18
//     console.log('adult');
// } else {
//     console.log('old');
// }






