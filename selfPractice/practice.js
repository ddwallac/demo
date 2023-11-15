//Numbers. All JavaScript numbers are stored as floating point. (Decimals)
let a = 5;
var b = 6.5;
const c = 700;
let d = 123e5;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//Objects: Object are defined with the curly braces {}. The values in an object are written as Name:Value pairs.

const car = {
  type: "BMW",
  year: 2018,
  color: "black",
  myCar: function () {
    return this.color + " " + this.type;
  },
  carYear: function () {
    return "My car is a " + this.year + " model.";
  },
};

console.log(car.type);
console.log(car.year);
console.log(car["color"]);
console.log("I own a " + car.myCar());
console.log(car.carYear());

//Arrays: Arrays are defined with the square brackets []. you can access the items of an array by using the index of the array

const vehicles = ["Ford", "Chevy", "Dodge", "BMW", "Mercedes"];

console.log(vehicles[0]);
console.log(vehicles[3]);

//Array methods: length, toString(), pop(), push(), shift(), unshift(), join(), delete(), concat(), flat(), splice(), slice()

//length: returns the length (size) of an array

const alphabet = ["a", "b", "c", "d", "e", "f"];

console.log(alphabet.length);

//toString(): converts an array to a string

console.log(alphabet.toString());

//pop(): removes the last element in an array and returns it
console.log(alphabet.pop());
console.log(alphabet);

//push(): adds a new element to the end of an array and returns the length of the array

console.log(alphabet.push("f", "g"));
console.log(alphabet);

//shift(): removes the first element in an array and returns it

console.log(alphabet.shift());
console.log(alphabet);

//unshift(): adds a new element at the beginning of an array and returns the length of the array

console.log(alphabet.unshift("a"));
console.log(alphabet);

//concat(): creates a new array by merging existing arrays.
const guns = ["kar98", "Ace", "Ak47"];
const ammo = ["7.62", "5.56", "9mm"];
const myLoadout = guns.concat(ammo);

console.log(myLoadout);

//flat(): concatenating subarray elements to a specified depth.

const array = [[1, [2], 3, [4], 5, [6]]];
const newArray = array.flat(2);
console.log(newArray);

//splice(): adds new elements to an array. the first parameter is the position where the new item is added, the second parameter is how many elements should be removed, the next are elements to be added. Then returns the new array

guns.splice(1, 0, "p90", "M4", "Scar");
console.log(guns);

//slice(): removes elements from an array an returns the removed elements in a new array. This methos selects elements from the first parameter and up to (but not including) the second parameter.

newGuns = guns.slice(3);
console.log(newGuns);

// cycle through an array using a for loop.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
// I'm initally setting I to 0. Then i'm saying run the code every time I is less than the length of the array. Then I am addind 1 to I after the code is ran.
for (let i = 0; i < num.length; i++) {
  sum += num[i];
}
console.log(sum);
