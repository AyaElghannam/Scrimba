let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let CharsArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let specialChars = [
  "/",
  "[",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "|",
  ".",
  "<",
  ">",
  "?",
  "]",
  "+",
];
let all = numsArr.concat(specialChars, CharsArr);
//length is 91

let frst = document.getElementById("btn-1");
let scnd = document.getElementById("btn-2");
let thrd = document.getElementById("btn-3");
let fourth = document.getElementById("btn-4");
let req = [frst, scnd, thrd, fourth];

function generate() {
  let rand = 0;
  let len = document.getElementById("passlen");
  if (len.value == "") {
    len.value = 8;
  }

  for (let index = 0; index < req.length; index++) {
    //let for now that each password of length 8
    req[index].textContent = "";
    for (let idx = 0; idx < len.value; idx++) {
      rand = Math.floor(Math.random() * 91);
      req[index].textContent += all[rand];
    }
  }
}

function copy(text) {
  navigator.clipboard.writeText(text.textContent);
  /* Alert the copied text */
  alert("Copied the text: " + text.textContent);
}
function getfirst() {
  copy(frst);
}
function getscnd() {
  copy(scnd);
}
function getthird() {
  copy(thrd);
}
function getfourth() {
  copy(fourth);
}
