let todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy",
];
const todosLength = todos.length;
for (let i = 0; i < todosLength; i++) {
  todos.pop();
}

function logTodos(todo, i) {
  console.log(todo, i);
}

todos.forEach(logTodos);

let counterOne = 0;
while (counterOne < 10) {
  console.log(counterOne);
  counterOne++;
}

let counterTwo = 10;
do {
  console.log(counterTwo);
  counterTwo--;
} while (counterTwo > 0);