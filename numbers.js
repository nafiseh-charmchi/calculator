const showNumber = document.getElementById("showNumber");
showNumber.style.marginTop = "50px";
showNumber.style.fontSize = "30px";
showResult.innerText = "0";
// SELECTED DIV
const divs = Array.from(document.querySelectorAll("div"));
const filtereNumberdDivs = divs.filter((div) => div.className == "numbers");
// SHOW NUMBER
const valueOfDiv = [];
let position = 0;
let number1 = "";
let number2 = "";
filtereNumberdDivs.forEach((div) => {
  div.addEventListener("click", function () {
    let number = "";
    switch (this.id) {
      case "ziro":
        number = 0;
        break;
      case "one":
        number = 1;
        break;
      case "two":
        number = 2;
        break;
      case "three":
        number = 3;
        break;
      case "four":
        number = 4;
        break;
      case "five":
        number = 5;
        break;
      case "six":
        number = 6;
        break;
      case "seven":
        number = 7;
        break;
      case "eight":
        number = 8;
        break;
      case "nine":
        number = 9;
        break;
      case "dot":
        number = ".";
        break;
    }
    valueOfDiv.push(number);
    if (position == 0) {
      number1 += number;
      showResult.innerText = "";
    } else if (position == 1) {
      number2 += number;
    }
    show();
  });
});
