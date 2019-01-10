// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var newObj = {
  username: "Steve",
  password: "pword",
}

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
  {
    username: "Steve",
    password: "pword",
  }
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
  {
    username: "Dan",
    timeline: "Fun",
  },
  {
    username: "Ken",
    timeline: "Sun",
  },
  {
    username: "Rita",
    timeline: "Done",
  }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password!");
  }
}

signIn(userNamePrompt, passwordPrompt);