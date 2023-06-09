//1 get all variables
const input = document.getElementById("number-input");
const resultText = document.querySelector("#result");
const button = document.querySelector("#button");

//2 when click on submit form return a resultText if right or wrong
button.addEventListener("click", () => {
  if (input.value == 88) {
    resultText.innerText = "Right on the spot! You are a lucky one.";
  } else if (input.value < 20) {
    resultText.innerText = "You are far away";
  } else if (input.value > 80) {
    resultText.innerText = "You are getting close";
  } else {
    resultText.innerText = "Try again";
  }
  input.value = "";
});

input.addEventListener("click", () => {
  resultText.innerText = "";
});
// const userInput = input.value;
// button.addEventListener("click", () => {
//   switch (input.value) {
//     case 88:
//       console.log("Right on the spot! You are a lucky one.");
//       break;
//     default:
//       console.log("Try again");
//   }
// });
