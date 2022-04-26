// Variables

// 1) Days of the Week
let dayOfWeek = 'Monday';
console.log(dayOfWeek);

dayOfWeek = 'Friday';
console.log(`I can't wait for ${dayOfWeek}!`);

// 2) User Input

let animalInput = prompt('What is your favorite animal? ');
let colorInput = prompt('What is your favorite color? ')
console.log(`I've never seen a ${colorInput} ${animalInput}!`);

// Conditionals

// 1) Meals
let favBreak = 'chicken biscuit w/cheese';
let favLunch = 'Asiago Spicy Chicken combo';
let favDinner = 'Pizza';
let timeOfDay = 1200;
if (timeOfDay < 1200) {
  foodChoice = favBreak;
} else if (timeOfDay > 1200 && timeOfDay < 1700) {
  foodChoice = favLunch;
} else if (timeOfDay > 1700) {
  foodChoice = favDinner
}
console.log(foodChoice);