//IIFE

// call expression

//module2

let student = (() => {
    return {
        name: "mayuresh",
        cls: "typbsc",
        mobNo: 9158274616
    };

})();

//module3

let teacher = (() => {
    return {
        name: "mahesh",
        mobNo: 9876543210
    };

})();

//module1
let College = ((std, tech) => {
    console.log(`student name is ${std.name} and Mobile No Is ${std.mobNo}`);
    console.log(`Teacher name is ${tech.name} and mob no is ${tech.mobNo}`);
})(student, teacher);