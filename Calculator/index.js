/* non-numeric buttons */
const clear = document.getElementById("ac");
const sign = document.getElementById("sign");
const percent = document.getElementById("percent");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const decimal = document.getElementById("decimal");
const evaluate = document.getElementById("evaluate");

/* numeric buttons */
const num_0 = document.getElementById("b0");
const num_1 = document.getElementById("b1");
const num_2 = document.getElementById("b2");
const num_3 = document.getElementById("b3");
const num_4 = document.getElementById("b4");
const num_5 = document.getElementById("b5");
const num_6 = document.getElementById("b6");
const num_7 = document.getElementById("b7");
const num_8 = document.getElementById("b8");
const num_9 = document.getElementById("b9");

const num_buttons = [
  num_0,
  num_1,
  num_2,
  num_3,
  num_4,
  num_5,
  num_6,
  num_7,
  num_8,
  num_9,
];

/* display */
const num = document.getElementsByClassName("num")[0];

/* stored numbers */
var primaryNum;
var secondaryNum;

/* conditions */
var primIsDecimal;
var secondisDecimal;
var divNum;
var mulNum;
var subNum;
var addNum;

/* initialize all variables  */
function init() {
  primaryNum = "0";
  secondaryNum = "0";

  primIsDecimal = false;
  secondisDecimal = false;
  divNum = false;
  mulNum = false;
  subNum = false;
  addNum = false;
  num.textContent = primaryNum;
}

/* format numbers */
function formatString(inputStr) {
  let x = parseFloat(inputStr);
  if (isNaN(x)) throw new Error("Invalid input: Not a number");

  // format the number to have at most 10 significant digits
  let formattedStr = x.toPrecision(10);

  // remove any trailing zeros after the decimal point
  if (formattedStr.includes(".")) {
    formattedStr = formattedStr.replace(/\.?0+$/, "");
  }

  // rnsure the length is at most 12 characters
  if (formattedStr.length > 12) {
    // handle scientific notation if necessary
    let parts = formattedStr.split("e");
    if (parts.length > 1) {
      // if scientific notation is used, ensure it's within 12 characters
      let base = parts[0].slice(0, 8); // Limit base to 8 characters
      formattedStr = base + "e" + parts[1];
    } else {
      formattedStr = formattedStr.slice(0, 12);
    }
  }

  return formattedStr;
}

/* return true if secondaryNum is to be modified */
function isSecond() {
  return divNum || mulNum || subNum || addNum;
}

/* handle each number entry */
function parseDigit(charDigit) {
  if (isSecond()) {
    if (
      parseFloat(secondaryNum) > Math.pow(2, 31) - 1 ||
      parseFloat(secondaryNum) < Math.pow(-2, 31)
    )
      return;
    else if (secondaryNum === "0") {
      secondaryNum = charDigit;
    } else if (secondaryNum.length < 12) {
      secondaryNum += charDigit;
    }
    num.textContent = formatString(secondaryNum);
  } else {
    if (
      parseFloat(primaryNum) > Math.pow(2, 31) - 1 ||
      parseFloat(primaryNum) < Math.pow(-2, 31)
    )
      return;
    else if (primaryNum === "0") {
      primaryNum = charDigit;
    } else if (primaryNum.length < 12) {
      primaryNum += charDigit;
    }
    num.textContent = formatString(primaryNum);
  }
}

/* add functions */
document.addEventListener("DOMContentLoaded", function () {
  init();
});

for (let i = 0; i < num_buttons.length; i++) {
  num_buttons[i].addEventListener("click", function () {
    parseDigit("" + i);
  });
}

clear.addEventListener("click", function () {
  init();
});

sign.addEventListener("click", function () {
  if (isSecond()) {
    secondaryNum = "" + parseFloat(secondaryNum) * -1;
    num.textContent = formatString(secondaryNum);
  } else {
    primaryNum = "" + parseFloat(primaryNum) * -1;
    num.textContent = formatString(primaryNum);
  }
});

percent.addEventListener("click", function () {
  if (isSecond()) {
    secondisDecimal = true;
    secondaryNum = "" + parseFloat(secondaryNum) / 100;
    num.textContent = formatString(secondaryNum);
  } else {
    primIsDecimal = true;
    primaryNum = "" + parseFloat(primaryNum) / 100;
    num.textContent = formatString(primaryNum);
  }
});

decimal.addEventListener("click", function () {
  if (isSecond()) {
    if (secondisDecimal) return;
    secondisDecimal = true;
    secondaryNum += ".";
    num.textContent = formatString(secondaryNum);
  } else {
    if (primIsDecimal) return;
    primIsDecimal = true;
    primaryNum += ".";
    num.textContent = formatString(primaryNum);
  }
});

/* arithmetic function definitions */
divide.addEventListener("click", function () {
  divNum = true;
  mulNum = false;
  subNum = false;
  addNum = false;
});

multiply.addEventListener("click", function () {
  divNum = false;
  mulNum = true;
  subNum = false;
  addNum = false;
});

subtract.addEventListener("click", function () {
  divNum = false;
  mulNum = false;
  subNum = true;
  addNum = false;
});

add.addEventListener("click", function () {
  divNum = false;
  mulNum = false;
  subNum = false;
  addNum = true;
});

evaluate.addEventListener("click", function () {
  if (divNum)
    primaryNum = "" + parseFloat(primaryNum) / parseFloat(secondaryNum);
  else if (mulNum)
    primaryNum = "" + parseFloat(primaryNum) * parseFloat(secondaryNum);
  else if (subNum)
    primaryNum = "" + parseFloat(primaryNum) - parseFloat(secondaryNum);
  else if (addNum)
    primaryNum = "" + parseFloat(primaryNum) + parseFloat(secondaryNum);
  else return;
  secondaryNum = "0";
  divNum = false;
  mulNum = false;
  subNum = false;
  addNum = false;
  num.textContent = formatString(primaryNum);
});
