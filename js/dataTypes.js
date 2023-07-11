// document.write("Hello")

// 1. Declare a variable called "name" and assign your name to it (as a string).

var name = "Bakhtiar Uddin";

// 2. Declare a variable called "age" and assign your age to it (as a number).

var age = 32;

// 3. Declare a variable called "isStudent" and assign a boolean value (true or false) indicating if you are a student or not.

var isStudent = true;

// 4. Declare a variable called "hobbies" and assign an array containing at least three of your hobbies.

var hobbies = ["Programming", "Travelling", "Learning"];

// 5. Declare a variable called "address" and assign an object with properties "street", "city", and "country" representing your address.

var address = {street: "Naya Paltan", city: "Dhaka", country: "Bangladesh"};

// 6. Print the following information using console.log():

// - Your name: "My name is [name]."

console.log("My name is " +name+ ".");


// - Your age: "I am [age] years old."

console.log("I am " +age+ "years old.")


// - Whether you are a student or not: "I am a student: [isStudent]."

console.log("I am a student: " +isStudent+ ".");


// - Your hobbies: "My hobbies are [hobbies]."

// var hobbies = ["Programming", "Travelling", "Learning"];

console.log("My hobbies are " + hobbies.join(", ") + ". <br>");
// or 
console.log(`My hobbies are ${hobbies.join(",")}.`)


// - Your address: "I live at [street], [city], [country]."
  
console.log(`I live at ${address.street}, ${address.city}, ${address.country}.`);  

