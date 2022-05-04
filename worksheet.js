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
if (timeOfDay <= 1200) {
  foodChoice = favBreak;
} else if (timeOfDay > 1200 && timeOfDay < 1700) {
  foodChoice = favLunch;
} else if (timeOfDay >= 1700) {
  foodChoice = favDinner
}
console.log(foodChoice);

// 2) Random Number
let myNum = Math.floor(Math.random() * 11);
if (myNum >= 0 && myNum <= 2) {
  console.log('Beatles');
} else if (myNum >= 3 && myNum <= 5) {
  console.log('Stones');
} else if (myNum >= 6 && myNum <= 8) {
  console.log('Floyd');
} else if (myNum == 9 || myNum == 10) {
  console.log('Hendrix');
}

// Loops

// 1) For Loops
for(let i = 0; i < 7; i++){
  console.log('JavaScript is cool!');
}

for (let i = 0; i < 11; i++){
  console.log(i);
}

const greeting = ['hello', 'goodbye']
for (const element of greeting){
  console.log(element);
}

// 2) While Loops
let userInput = '';
let isInstructorAwesome = 'yes';
while (userInput != isInstructorAwesome){
  userInput = prompt('Do you think the instructor is awesome? ');
  if (userInput = isInstructorAwesome){
    console.log(`I have been learning a lot from the instructor.`)
  } else {
    console.log(`I need a new instructor. `)
  }
}

// Functions
// 1) Favorite Movie (void functions)
let favMovie = 'DreamGirls';
console.log(favMovie);

function printMovieName() {
  let favMovie = 'DreamGrirls';
  console.log(favMovie);
}
printMovieName();

// 2) Favorite Band (return functions)
function favBand(){
  let userInput = prompt(`Who is your favorite band of all time? `);
  return userInput;
}
let bandName = favBand();
console.log(bandName);

// 3) Concert(parameters)
function concertDisplay(musicalAct) {
  let myStreet = prompt(`What street do you currently live on? `);
  console.log(`It would be great if ${musicalAct} played a show on ${myStreet}`);
}
concertDisplay(bandName);

// Arrays
let desktopItems = ['Captian America Funko Doll', 'my cellphone', 'three computer monitors'];
console.log(desktopItems[1]);
desktopItems.push('Infinity Gauntlet');
console.log(desktopItems)
for (let i = 0; i < desktopItems.length; i++){
  console.log(desktopItems[i]);
}
