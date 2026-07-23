const colors = ["red", "blue", "green", "yellow", "orange"];

colors.forEach((index , item ) => {
    console.log(index, item);
});



// have the emptt slots also in action

const fruits = [];
fruits.push("banana", "apple", "peach");
fruits[5] = "mango"; // Leaves indices 3 and 4 empty!

// 1. Object.keys(fruits)
console.log(Object.keys(fruits));
// Output: ['0', '1', '2', '5']  <-- Skips 3 and 4, returns strings!

// 2. fruits.keys()
console.log([...fruits.keys()]);
// Output: [0, 1, 2, 3, 4, 5]    <-- Includes 3 and 4, returns numbers!



const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
}
// Output
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']