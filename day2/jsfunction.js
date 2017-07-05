//Function Return
//Functions Used as Variable


var calc = myFuuction(2, 3);

function myFuuction(num1, num2) {

    return num1 * num2;

}

console.log('ans is ' + calc)

//calculate area of tringle 


let TriArea = getArea(10, 5);

function getArea(base, height) {

    return (1 / 2) * base * height;
}
console.log('area of tringle=' + TriArea);


//anonymous function - (without function name)

let addition = function(num3, num4) {
    return num3 + num4;

}
addition(12, 18)
console.log("anonymous function addition=" + addition(5, 15));


//The Function Returning the Function

function Return() {
    return function add() {
        return "hii im Return";
    }
}

let GetData = Return();
console.log('return function ' + GetData());


// function passed in method parameters

function params(num5, cals) {
    cals();
}

params(12, function() {});