const textInput = document.getElementById("word");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function wordChecker() {
  const value = textInput.value;
  const reverse = reverseString(value);
  if (value === reverse) {
    alert("caca");
  }
  textInput.value = "";
}
