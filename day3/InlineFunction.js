// Inline Function

//  => fat arrow


//old function syntax

let Add = function(num1, num2) {
    return num1 + num2
}

//same function using new syntax
let addNew = (num3, num4) => num3 + num4
console.log(addNew(2, 3))

//OR

let subtr = (num6, num7) => {
    console.log("sunbtraction is " + (num6 - num7))

    // log written in multiline string

    console.log(`answer is ${num6-num7}`)


}
subtr(8, 4);

// array function with for loop

let arr = ['sci', 'math', 'hin', 'mar', 'eng'];

for (let i = 0; i < arr.length; i++) {
    console.log(`i is ${i}`);
}

// forEach function

arr.forEach(function(num) {
    console.log(`num is ${num}`);
})

//another way we written

arr.forEach((num) => console.log(`new sub are ${num}`))