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
var text = input_field.value;

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

  const alphabet_chars = "abcdefghijklmnopqrstuvwxyz";
  const numerical_chars = "0123456789";
  const special_chars = "[]$&+,:;=?@#|'<>.-^*()%!";
  const space_char = " ";

  var numLower = lowercase.checked ? 1 : 0;
  var numUpper = uppercase.checked ? 1 : 0;
  var numNumber = number.checked ? 1 : 0;
  var numSpecial = special.checked ? 1 : 0;
  var numSpace = space.checked ? 1 : 0;

  var chars = [numLower, numUpper, numNumber, numSpecial, numSpace];

  var remainChars = parseInt(slider.value);
  for (let i = 0; i < chars.length; i++) remainChars -= chars[i];

  let idx;
  while (remainChars != 0) {
    idx = Math.floor(Math.random() * chars.length);
    if (chars[idx] != 0) {
      chars[idx]++;
      remainChars--;
    }
  }

  remainChars = parseInt(slider.value);

  while (remainChars != 0) {
    let nextChar;
    idx = Math.floor(Math.random() * chars.length);

    if (chars[idx] != 0) {
      switch (idx) {
        case 0:
          nextChar = alphabet_chars.charAt(
            Math.floor(Math.random() * alphabet_chars.length)
          );
          break;
        case 1:
          nextChar = alphabet_chars
            .charAt(Math.floor(Math.random() * alphabet_chars.length))
            .toUpperCase();
          break;
        case 2:
          nextChar = numerical_chars.charAt(
            Math.floor(Math.random() * numerical_chars.length)
          );
          break;
        case 3:
          nextChar = special_chars.charAt(
            Math.floor(Math.random() * special_chars.length)
          );
          break;
        case 4:
          nextChar = space_char;
      }

      if (duplicate.checked || !password.includes(nextChar)) {
        password += nextChar;
        chars[idx]--;
        remainChars--;
      }
    }
  }
  text = password;
  input_field.value = text;
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
