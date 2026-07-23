// const colors = ["red", "blue", "green", "yellow", "orange"];

// colors.forEach((index , item ) => {
//     console.log(index, item);
// });



// // have the emptt slots also in action

// const fruits = [];
// fruits.push("banana", "apple", "peach");
// fruits[5] = "mango"; // Leaves indices 3 and 4 empty!

// // 1. Object.keys(fruits)
// console.log(Object.keys(fruits));
// // Output: ['0', '1', '2', '5']  <-- Skips 3 and 4, returns strings!

// // 2. fruits.keys()
// console.log([...fruits.keys()]);
// // Output: [0, 1, 2, 3, 4, 5]    <-- Includes 3 and 4, returns numbers!



// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";
// const iterator = colors.keys();
// for (const key of iterator) {
//   console.log(`${key}: ${colors[key]}`);
// }
// // Output
// // 0: red
// // 1: yellow
// // 2: blue
// // 3: undefined
// // 4: undefined
// // 5: purple

// const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']


// // .Join and .Split

// // 'fruits' array created using array literal notation.
// const fruits = ["Apple", "Banana"];
// console.log(fruits.length);
// // 2

// // 'fruits2' array created using the Array() constructor.
// const fruits2 = new Array("Apple", "Banana");
// console.log(fruits2.length);
// // 2

// // 'fruits3' array created using String.prototype.split().
// const fruits3 = "Apple, Banana".split(", ");
// console.log(fruits3.length);
// // 2




// const fruits = ["Apple", "Banana"];
// const fruitsString = fruits.join(", ");
// console.log(fruitsString);
// // "Apple, Banana"




//Map function practice

const names = ["Ali", "Sara", "Ahmed"]

const namesInupperCase = names.map((name)=> name.toUpperCase());
console.log(namesInupperCase);




// filter function practice

const numbers = [1, 2, 3, 4, 5, 6];
const eveNumbers = numbers.filter((number)=> number%2 === 0 );
console.log(eveNumbers);



// destructuring practice
const user = { name: "Muhammad", age: 20 }
const{name , age} = user;
console.log("the User name is " + name + " and the age is " + age);