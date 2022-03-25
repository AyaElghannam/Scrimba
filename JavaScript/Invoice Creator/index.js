const car = document.getElementById("wash-car");
const mow = document.getElementById("mow-lawn");
const pow = document.getElementById("pull-weeds");
const reset = document.getElementById("mail");

let money = document.getElementById("Tot-money");
let par = document.getElementById("added");
let purchased = [];
let service = [];
let update = "";

let sigma = 0;

let carAdded = false;
let mowAdded = false;
let powAdded = false;

car.addEventListener("click", function () {
  if (carAdded) {
    console.log("Already Added");
  } else {
    purchased.push(car.value);
    service.push("car");
    carAdded = true;
    updateMoney("add", car.value);
    addText(car);
  }
});

mow.addEventListener("click", function () {
  if (mowAdded) {
    console.log("Already Added");
  } else {
    purchased.push(mow.value);
    service.push("mow");
    mowAdded = true;
    updateMoney("add", mow.value);
    addText(mow);
  }

});

pow.addEventListener("click", function () {
  if (powAdded) {
    console.log("Already Added");
  } else {
    purchased.push(pow.value);
    service.push("pow");
    powAdded = true;
    updateMoney("add", pow.value);
    addText(pow);
  }

});

reset.addEventListener("click", function(){
  purchased = []
  service = []
  carAdded = false;
  mowAdded = false;
  powAdded = false;
  par.innerHTML = ""
  money.innerHTML = ""
})

// function remove() {
//   //  step 1: remove service from service list
//   //  step 2: remove cost from purchased list
//   //  step 3: update total cost
//   //  step 4: update textShown
// }

function addText(item) {
  let srvc = item.innerText.split(":")[0];


  update += `
        <li>
            ${srvc}
            <span>
              <button class="remove" onclick ="remove()" >
                Remove
              </button>
            </span>
            <span class = "total">
                <span class="sign">
                    $
                </span>
                ${item.value}
            </span>
        </li>
        `;
  console.log(srvc);
  par.innerHTML = update;
}

function updateMoney(op, val) {
  if (op === "add") {
    sigma += parseInt(val);
  } else {
    sigma -= parseInt(val);
  }
  money.innerHTML = "$" + sigma;
}
