const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#triangle-button");
const outputCheck = document.querySelector("#output");

function calculateTriangleSum(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

function isTriangle() {
const sum = calculateTriangleSum(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
  if(sum === 180) {
    outputCheck.innerText="Yahh! The angles form a Triangle";
  } else {
    outputCheck.innerText="Ohh! The angles don't form a Triangle";
  }


}

isTriangleBtn.addEventListener('click', isTriangle);

