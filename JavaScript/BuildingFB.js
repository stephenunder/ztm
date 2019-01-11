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
  },
  {
    username: "Betty",
    password: "123",
  },
  {
    username: "Travis",
    password: "secret",
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

function isUserValid(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (database[i].username === username &&
      database[i].password === password) {
        return true;
      }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password!");
  }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);