var QuizInput = document.querySelector(".Quiz-form");
var QuizButton = document.querySelector("#click-Quiz");
var QuizOutput = document.querySelector("#Output-Quiz");

var AnswerDataBase = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

QuizButton.addEventListener("click", ScorePlease);

function ScorePlease() {
  var formResults = new FormData(QuizInput);
  let score = 0,
      index = 0;
  for (let value of formResults.values()) {
    if (value === AnswerDataBase[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  // console.log("The score is "+score);
  QuizOutput.innerText = "The score is " + score;
}
