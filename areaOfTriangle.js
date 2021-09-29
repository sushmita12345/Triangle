const sides = document.querySelectorAll(".side-input");
const calculateTriangle = document.querySelector("#triangle-btn");
const outputCheck = document.querySelector("#output");

function calculateProductOfSide(base, height) {
  
  const productOfSide = (base * height);
  return productOfSide;
  
}

function calculateAreaOfTriangle() {
  const productOfSide = calculateProductOfSide(Number(sides[0].value), Number(sides[1].value));

  if(Number(sides[0].value) && Number(sides[1].value)){
  const areaOfTriangle = productOfSide/2;
  
  outputCheck.innerText="The area of Triangle is " + areaOfTriangle;
  } else {
    outputCheck.innerText="Please enter both the fields🤨";
  }

}

calculateTriangle.addEventListener('click', calculateAreaOfTriangle);