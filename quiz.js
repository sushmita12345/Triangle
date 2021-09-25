const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-btn");

const outputCheck = document.querySelector("#output");

const correctAnswer = ["90", "right angle"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for(let value of formResults.values()) {
    if(value === correctAnswer[index]){
      score = score + 1;
    }
    index = index + 1;
  }
  outputCheck.innerText="Your score is " + score;
}


submitAnswerBtn.addEventListener('click', calculateScore);

