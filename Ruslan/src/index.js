const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");

console.log(v1);

let num1 = 0;
let num2 = 0;

v1.addEventListener("change", (e) => {
  num1 = +e.target.value;
  // num1 = Number(e.target.value);
  // num1 = e.target.value;
});
v2.addEventListener("change", (e) => {
  num2 = +e.target.value;
  // num2 = e.target.value;
});

const res = document.getElementById("calc");

res.addEventListener("click", () => {
  // console.log(num1, num2);
  if (num1 && num2) {
    const sum = num1 + num2;

    document.getElementById("result").innerHTML = `result: ${sum}`;
    v1.value = "";
    v2.value = "";
  }
});