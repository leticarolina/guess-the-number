//1 get all variables
const input = document.getElementById("number-input");
const resultText = document.querySelector("#result");
const button = document.querySelector("#button");

//2 when click on submit form return a resultText if right or wrong
button.addEventListener("click", () => {
  if (input.value == 87) {
    resultText.innerText = "Right on the spot! You are a lucky one.";
  } else if (input.value < 20) {
    resultText.innerText = "Not there yet";
  } else if (input.value > 87) {
    resultText.innerText = "That was not a good guess";
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
//     case "hi":
//       console.log("Right on the spot! You are a lucky one.");
//       break;
//     default:
//       console.log("Try again");
//   }
// });

// console.log("hi" + input);
