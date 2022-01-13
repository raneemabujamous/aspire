let one = document.getElementById("one");
let tow = document.getElementById("tow");
let arr = [
  "Apple",
  "Banana",
  "Cucumber",
  "Watermelon",
  "Ice-cream",
  "Orange",
  "Eggplant",
  "Egg",
];
function selectByFisrt(array) {
  for (let i = 0; i < array.length; i++) {
    let first = array[i].slice(0, 1);
    if (
      first == "A" ||
      first == "E" ||
      first == "I" ||
      first == "O" ||
      first == "U"
    ) {
      let span = document.createElement("span");
      one.appendChild(span);
      span.textContent = array[i] + " ";
    }
  }
}
selectByFisrt(arr);
function longerThan5(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      let span = document.createElement("span");
      tow.appendChild(span);
      span.textContent = array[i] + " ";
    }
  }
}
longerThan5(arr);
