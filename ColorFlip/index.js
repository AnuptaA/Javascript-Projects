const button = document.getElementsByClassName("color-button")[0];
const currColor = document.querySelector(".span-color");

button.addEventListener("click", function () {
  const nextColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  document.body.style.backgroundColor = nextColor;
  currColor.textContent = nextColor;
});
