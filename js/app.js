// import Default from "./utils.js";
// console.log(Default);
// import { apiKey, a } from "./utils.js";
// console.log(apiKey, a);

// console.log("Hello word");

// let userMessage = "Hello word";
// console.log(userMessage);

// console.log("10" + 5);
// console.log(2 + "6");

// console.log(3 === 4);
// console.log("10" == 10);
// console.log("10" === 10);

function greetUser(userName, message = "Hello") {
  console.log(userName, message);
}
greetUser("Huseyn");
greetUser("Yusif", "Whats up?");

function createGreeting(user, msg) {
  return "Hi, I am " + user + ". " + msg;
}

const greeting1 = createGreeting("Huseyn", "Salam");
const greeting2 = createGreeting("Yusif", "Hello");
console.log(greeting1, greeting2);
