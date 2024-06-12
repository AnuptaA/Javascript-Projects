const btn = document.getElementsByClassName("color-button")[0];
const currBtnText = document.querySelector(".color-button");
const currColor = document.querySelector(".span-color");

let isRunning = false;
let timeInterval;

btn.addEventListener("click", function () {
  if (isRunning) {
    isRunning = false;
    clearInterval(timeInterval);
    currBtnText.textContent = "Click to start!";
  } else {
    changeColor();
    isRunning = true;
    timeInterval = setInterval(changeColor, 500);
    currBtnText.textContent = "Click to stop!";
  }
});

function changeColor() {
  const nextColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  document.body.style.backgroundColor = nextColor;
  currColor.textContent = nextColor;
}
