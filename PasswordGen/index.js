// ([]$&+,:;=?@#|'<>.-^*()%!)

/* range slider variables */
const slider = document.getElementById("len-slider");
const length = document.getElementById("current-length");

/* checkboxes */
const lowercase = document.getElementById("lower-allowed");
const uppercase = document.getElementById("upper-allowed");
const number = document.getElementById("numbers-allowed");
const special = document.getElementById("special-allowed");
const space = document.getElementById("spaces-allowed");
const duplicate = document.getElementById("duplicates-allowed");

/* generate button */
const generate = document.getElementsByClassName("generate")[0];

/* password field */
const pass_cont = document.querySelector(".pass-cont");
const copy_btn = pass_cont.querySelector(".copy-button");
const input_field = pass_cont.querySelector(".copy-link-input");
const text = input_field.value;

var password;

/* adding functions */
function generatePassword() {
  if (
    !lowercase.checked &&
    !uppercase.checked &&
    !number.checked &&
    !special.checked
  )
    return;
  password = "";

  var remainChars =
    parseInt(slider.value) -
    (lowercase +
      (uppercase.checked ? 1 : 0) +
      (number.checked ? 1 : 0) +
      (special.checked ? 1 : 0));

  var numLower = 0;
  var numUpper = 0;
  var numNumber = 0;
  var numSpecial = 0;
  var numSpace = 0;

  if (lowercase.checked) {
    remainChars -=
      (uppercase.checked ? 1 : 0) +
      (number.checked ? 1 : 0) +
      (special.checked ? 1 : 0);
    numLower = Math.floor(1 + Math.random() * remainChars);
  }

  console.log(numLower);
}

generate.addEventListener("click", generatePassword);

copy_btn.addEventListener("click", () => {
  input_field.select();
  navigator.clipboard.writeText(text);
  input_field.value = "Copied!";
  setTimeout(() => (input_field.value = text), 500);
});

slider.oninput = function () {
  length.textContent = slider.value;
};
