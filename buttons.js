const showResult = document.getElementById("showResult");
const filteredButtonDivs = divs.filter((div) => div.className == "buttons");
let res = 0;
let sign = "";
let buttonEqual = false;
let typeOfButton = null;
filteredButtonDivs.forEach((div) => {
  div.addEventListener("click", function () {
    // ........................ If showNumber is empty
    if (div.id !== "AC" && !showNumber.innerText) {
      const element = document.createElement("div");
      element.classList.add("invalidValue");
      element.innerText = "invalid value !";

      document.body.appendChild(element);
      setTimeout(() => {
        element.parentNode.removeChild(element);
      }, 2000);
      typeOfButton = "";
      return;
    }
    // ........................ delete
    if (div.id == "AC") {
      location.reload(true);
    }
    // ........................ back Space
    if (div.id == "backSpace") {
      if (res) {
        location.reload(true);
        return;
      }
      if (position === 0 && number1) {
        number1 = number1.slice(0, -1);
      } else if (position === 1 && number2) {
        number2 = number2.slice(0, -1);
      }
      valueOfDiv.pop();
      show();
    }
    // ........................ minus Number
    if (div.id == "minusNumber") {
      if (position === 0) {
        if (number1.startsWith("-")) {
          number1 = number1.slice(1);
          valueOfDiv.shift();
          show();
          return;
        } else {
          number1 = "-" + number1;
          x = valueOfDiv.indexOf(sign);
          valueOfDiv.unshift("-");
          show();
        }
      } else if (position === 1) {
        if (number2.startsWith("-")) {
          number2 = number2.slice(1);
          valueOfDiv.shift();
          show();
          return;
        } else {
          number2 = "-" + number2;
          let x = valueOfDiv.indexOf(sign);
          valueOfDiv.splice(x + 1, 0, "-");
          show();
        }
      }
    }
    // ........................ addition
    if (div.id == "addition") {
      position = 1;
      if (typeOfButton) {
        equal();
      }
      typeOfButton = "addition";
      sign = "+";
      mathes();
    }
    // ........................ subtraction
    if (div.id == "subtraction") {
      position = 1;
      if (typeOfButton) {
        equal();
      }
      typeOfButton = "subtraction";
      sign = "-";
      mathes();
    }
    // ........................ multiply
    if (div.id == "multiply") {
      position = 1;
      if (typeOfButton) {
        equal();
      }
      typeOfButton = "multiply";
      sign = "×";
      mathes();
    }
    // ........................ division
    if (div.id == "division") {
      position = 1;
      if (typeOfButton) {
        equal();
      }
      typeOfButton = "division";
      sign = "÷";
      mathes();
    }
    // ........................ equal
    if (div.id == "equal") {
      buttonEqual = true;
      showNumber.style.marginTop = "30px";
      showNumber.style.opacity = "0.5";
      showNumber.style.fontSize = "20px";
      equal();
      show();
    }
  });
});
function equal() {
  if (typeOfButton == "addition") {
    res = Number(number1) + Number(number2);
  }
  if (typeOfButton == "subtraction") {
    res = Number(number1) - Number(number2);
  }
  if (typeOfButton == "multiply") {
    res = Number(number1) * Number(number2);
  }
  if (typeOfButton == "division") {
    res = Number(number1) / Number(number2);
  }
}
function mathes() {
  if (number2) {
    number1 = res;
    valueOfDiv.length = 0;
    valueOfDiv.push(res);
    valueOfDiv[1] = sign;
    number2 = "";
    equal();
  } else {
    valueOfDiv.push(sign);
  }
  show();
}

function show() {
  let valueShowNumber = "";
  let valueShowResult = "";
  if (buttonEqual) {
    valueShowResult = res;
  }
  valueOfDiv.forEach((element) => {
    valueShowNumber += element;
    valueShowNumber = valueShowNumber.split("").join(" ");
  });
  showNumber.innerText = valueShowNumber;
  showResult.innerText = valueShowResult;
}
