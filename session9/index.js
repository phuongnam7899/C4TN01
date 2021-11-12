// DOM - Document Object Model

// Document: The whole website
// Object: data type {}
// Model: (mô hình)

// Get element
const myButton = document.getElementById('magic-button');
console.log(myButton);

// Do any with element
// console.log(myButton.innerText);
// myButton.innerText = 'hello'
// myButton.style.color = 'wheat'
// myButton.style.backgroundColor = 'lightblue'
// myButton.style.fontSize = '50px'
// myButton.style.borderRadius = '5px'
// myButton.style.border = 'none'
// myButton.style.width = '150px'

// Event

let currentFontSize = 20;

myButton.addEventListener('click', () => {
    // Font size increase by 2px at every click
    if (currentFontSize <= 40) {
        currentFontSize += 2;
        myButton.style.fontSize = `${currentFontSize}px`
    }
})
