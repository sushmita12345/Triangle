const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputCheck = document.querySelector("#output");


function calculateSumOfSquares(a, b){
  const sumOfSquares = a*a + b*b;
  return sumOfSquares;
  
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));

  if(Number(sides[0].value) && Number(sides[1].value)){
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  const outputHypo = lengthOfHypotenuse.toFixed(2);
  outputCheck.innerText="The length of hypotenuse is " + outputHypo;
  } else {
    outputCheck.innerText="Please enter both the fields🤨";
  }

}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);