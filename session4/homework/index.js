// Ex1
// let numbersString = '';
// const endNumber = Number(prompt('Enter last number:'));

// for (let i = 1; i <= endNumber; i++) {
//     // console.log(`Previous result is ${numbersString}`);
//     numbersString += i;
//     // console.log(`Current result is ${numbersString}`);
// }

// console.log(numbersString);


// const endNumber = 100;
// let total = 0;

// // total += 1;
// // total += 2;
// // total += 3;
// // total += 4;
// // total += 5;

// for (let i = 1; i <= endNumber; i++) {
//     total += i;
// }
// // 5 => 2 + 4 = 6

// console.log(total);


//ex3

// 3 4
let result = '';
const rowNumber = 10;
const rowLength = 5
// Draw block
for (let i = 0; i < rowNumber; i++) {
    // Draw one row
    let oneRow = '';
    for(let j = 0; j < rowLength;j++) {
        oneRow += '*'
    }
    oneRow += '\n';
    result += oneRow
}
console.log(result);



