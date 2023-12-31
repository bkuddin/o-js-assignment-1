// 1. Declare a variable called "temperature" and assign it a numeric value representing the current temperature.

var temperature = 40;

// 2. Write an if-else statement to check if the temperature is greater than or equal to 30 degrees Celsius.

// - If the temperature is greater than or equal to 30, print "It's a hot day!" using console.log().
//  - Otherwise, print "It's a normal day!" using console.log().

if(temperature>= 30){
    console.log("It's a hot day!")
}else{
    console.log("It's a normal day!")
}

// 3. Declare a variable called "isRaining" and assign it a boolean value (true or false) indicating if it's raining or not.

var isRaining = true;


// 4. Write an if-else statement to check if it's raining.
// - If it's raining, print "Don't forget your umbrella!" using console.log().
// - Otherwise, print "Enjoy your day!" using console.log().

if (isRaining) {
    console.log("Don't forget your umbrella!");
  } else {
    console.log("Enjoy your day!");
  }

//  5. Declare a variable called "time" and assign it a numeric value representing the current hour of the day (in 24-hour format).

var time = new Date().getHours();

// 6. Write an if-else statement to check the time of the day.

// - If the time is between 6 AM and 12 PM (inclusive), print "Good morning!" using console.log().

if (time >= 6 && time <= 12) {
    console.log("Good morning!");
  }

// - If the time is between 12 PM and 6 PM (inclusive), print "Good afternoon!" using console.log().

if (time >= 12 && time <= 18){
    console.log("Good afternoon!");
}
// - If the time is between 6 PM and 12 AM (inclusive), print "Good evening!" using console.log().
if (time >= 18 || time <= 0){
    console.log("Good evening!");
}
// - Otherwise, print "Good night!" using console.log().

else{
    console.log("Good night!"); 
}




