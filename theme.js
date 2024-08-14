const body = document.body;
const bodyOfCalculator = document.getElementById("bodyOfCalculator");
const screenOfResult = document.getElementById("screen");
const changer_theme = document.getElementById("changer_theme");
const button_changer_theme = document.getElementById("changer_theme_button");
const numbers = document.getElementsByClassName("numbers");
//  .... pretty comment

// .... THEME
const arrNumbers = Array.from(numbers);
let mood = sessionStorage.getItem("mood");
if (!mood) {
  mood = "light"; // حالت پیش‌فرض
  lightMood();
} else {
  if (mood == "light") {
    lightMood(); // تغییر به حالت روشن
  } else {
    darkMood(); // اگر حالت موجود است، به حالت تاریک بروید
  }
}

button_changer_theme.addEventListener("click", function () {
  if (mood === "dark") {
    lightMood();
    mood = "light";
  } else {
    darkMood();
    mood = "dark";
  }
  sessionStorage.setItem("mood", mood);
});

function darkMood() {
  body.style.backgroundColor = "#030513e1";
  body.style.color = "#ffffffee";
  bodyOfCalculator.style.backgroundColor = "#030513e1";
  bodyOfCalculator.style.boxShadow = "0 0 0.1em 0.2em rgba(1, 5, 24, 0.897)";
  screenOfResult.style.backgroundColor = "#11142b";
  screenOfResult.style.boxShadow = "inset 0 0 0.1em 0.1em rgb(4, 0, 19)";
  button_changer_theme.style.backgroundColor = "rgba(3, 20, 255, 0.452)";
  arrNumbers.forEach((i) => {
    i.style.backgroundColor = "#111329";
  });
  changer_theme.classList.remove("transitionToLightMood");
  changer_theme.classList.add("transitionToDarkMood");
}

function lightMood() {
  body.style.backgroundColor = "#e9e9eee1";
  body.style.color = "black";
  bodyOfCalculator.style.backgroundColor = "#e9e9eee1";
  bodyOfCalculator.style.boxShadow =
    "0 0 0.1em 0.2em rgba(211, 210, 210, 0.192)";
  screenOfResult.style.backgroundColor = "white";
  screenOfResult.style.boxShadow =
    "inset 0 0 0.1em 0.1em rgb(106, 103, 100, 0.397)";
  button_changer_theme.style.backgroundColor = "rgba(300, 300, 3, 0.430)";

  arrNumbers.forEach((i) => {
    i.style.backgroundColor = "#ffffffee";
  });

  changer_theme.classList.remove("transitionToDarkMood");
  changer_theme.classList.add("transitionToLightMood");
}
