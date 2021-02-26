var containerEle = document.body.querySelector(".container");
var num1 = Number(prompt("Enter in a number: "));

if (Number.isInteger(num1) === true) {
  var op = prompt("Enter in a operator: ");

  //Addition
  if (op === "+") {
    var num2 = Number(prompt("Enter in a number: "));

    if (Number.isInteger(num2) === true) {
      containerEle.innerHTML = num1 + num2;
    } else {
      containerEle.innerHTML = "You have not entered a number";
    }

    //Subtraction
  } else if (op === "-") {
    var num2 = Number(prompt("Enter in a number: "));

    if (Number.isInteger(num2) === true) {
      containerEle.innerHTML = num1 - num2;
    } else {
      containerEle.innerHTML = "You have not entered a number";
    }

    //Division
  } else if (op === "/") {
    var num2 = Number(prompt("Enter in a number: "));

    if (Number.isInteger(num2) === true) {
      containerEle.innerHTML = num1 / num2;
    } else {
      containerEle.innerHTML = "You have not entered a number";
    }

    //Multiplication
  } else if (op === "*") {
    var num2 = Number(prompt("Enter in a number: "));

    if (Number.isInteger(num2) === true) {
      containerEle.innerHTML = num1 * num2;
    } else {
      containerEle.innerHTML = "You have not entered a number";
    }
  } else {
    containerEle.innerHTML = "You have entered a invalid operator";
  }
} else {
  containerEle.innerHTML = "You have not entered a number";
}