// // Function
// // Declare function
// function sayHello() {
//     console.log('hello');
//     console.log('world');
// }

// // Excute function
// sayHello();
// // ....
// sayHello();

// // num: parameter
// function doubleNumber(num) {
//     return num * 2;
// }
// // console.log(doubleNumber(2));
// const doubleOf2 = doubleNumber(2);
// const doubleOf3 = doubleNumber(3);
// // console.log(doubleOf2 + doubleOf3);

// // function

// function sum(firstParameter, secondParameter) {
//     return firstParameter + secondParameter;
// }
// console.log(sum(1,3));

// // const sum = (firstParameter, secondParameter) => {
// //     return firstParameter + secondParameter;
// //     return 2;
// // }

// // 1. findMax recieve 1 parameter an array of numbers => return max number
// // 2. findOdd recieve 1 parameter an array of numbers => return 
// // an array of odd numbers [1,2,3,4] => [1, 3] 
// // 3. findMaxOdd  recieve 1 parameter an array of numbers => retuen max odd4
// //  number in that array [1,2,3,4,5] => 5

// function findMax(numbers) {
//     let maxNumber = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > maxNumber) {
//             maxNumber = numbers[i]
//         }
//     }
//     return maxNumber;
// }

// function findOdd(numbers) {
//     const oddNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0) oddNumbers.push(numbers[i])
//     }
//     return oddNumbers;
// }

// function findMaxOdd(numbers) {
//     const oddNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0) oddNumbers.push(numbers[i]);
//     }
//     let maxNumber = oddNumbers[0];
//     for (let i = 0; i < oddNumbers.length; i++) {
//         if (oddNumbers[i] > maxNumber) {
//             maxNumber = oddNumbers[i];
//         }
//     }
//     return maxNumber
// }

// function findMaxOddOptimized(numbers) {
//     const oddNumbers = findOdd(numbers);
//     return findMax(oddNumbers);
// }

// console.log(findMaxOddOptimized([1,12,2,4,5,6,7]));

// HW

function checkExists(nums,element) {
    for(let i = 0; i < nums.length; i++) {
        if (element == nums[i]){ 
            return true; 
        }
    }
    return false;
}

function getUniqueChars(charraters) {
    const uniqChars = [];
    for (let i = 0; i < charraters.length; i++) {
        const character = charraters[i];
        if (checkExists(uniqChars, character) === false) {
            uniqChars.push(character)
        }
    }
    return uniqChars;
}
// console.log(getUniqueChars(['h', 'e', 'l', 'l', 'o']));
// console.log('hello');
// function checkExists (value,numbers) {
//     let status = true
//     for (let i = 0; i < numbers.length; i++ ) {
//         let name = numbers[i];
//         if (name == value) {
//             status = true;
//             return status
//         }   
//     }
//     return status
// }

// console.log(checkExists(1, [1,2,3,4]));