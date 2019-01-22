const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];



function answer2 (arr, target) {
  arr.sort((a, b) => a - b);
  let answerArr = [];
  for (let num of arr) {
    for (let num2 of arr) {
      if(num + num2 === target) {
        answerArr = [num, num2];
          return answerArr;
      }
    }
  }
  return answerArr;
}