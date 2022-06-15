// const calc = document.getElementById("calc");

// calc.addEventListener("click", () => {
//   let input1 = document.getElementById("v1")
//   let num1 = +input1.value

//   let input2 = document.getElementById("v2")
//   let num2 = +input2.value

//   document.getElementById("result").innerHTML = `result: ${num1 + num2}`;
// });

let num1 = 0;
let num2 = 0;

let input1 = document.getElementById("v1")
let input2 = document.getElementById("v2")
input1.addEventListener('change', function () {
  num1 = +input1.value
})
input2.addEventListener('change', function () {
  num2 = +input2.value
})

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
plus.addEventListener("click", () => {
  document.getElementById("result").innerHTML = `result: ${num1 + num2}`;
});


minus.addEventListener("click", () => {
  document.getElementById("result").innerHTML = `result: ${num1 - num2}`;
});