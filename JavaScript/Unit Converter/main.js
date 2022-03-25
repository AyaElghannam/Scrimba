function convert() {
  let giv = document.getElementById("given");
  let givenValue = giv.value;

  let givenUnit = document.querySelector('input[name="unit"]:checked').value;
  let ans = 0;

//   console.log(givenValue);
//   console.log(givenUnit);
  if (givenValue === "") {
    alert("Enter Value");
  } else {
    if (givenUnit == "feet") {
      ans = givenValue / 3.28;
    } else if (givenUnit === "meters") {
      ans = givenValue * 3.82;
    } else if (givenUnit === "liters") {
      ans = givenValue * 0.26;
    } else if (givenUnit === "galons") {
      ans = givenValue / 0.26;
    } else if (givenUnit === "Kilograms") {
      ans = givenValue * 2.204;
    } else if (givenUnit === "pounds") {
      ans = givenValue / 2.204;
    }
  }
  giv.value = ans.toFixed(3);
}
