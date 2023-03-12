var playBtn = document.querySelector("#start-btn");
var nextBtn = document.querySelector("#next-btn");
var timeEl = document.querySelector('.timerBox');
var scoreEl = document.querySelector('.scoreBox');
var questionEl = document.querySelector("#questions");
var answerBtnsEl = document.querySelector("#answer-buttons");
var optionsABtn = document.querySelector('#option-a');
var optionsBBtn = document.querySelector('#option-b');
var optionsCBtn = document.querySelector('#option-c');
var optionsDBtn = document.querySelector('#option-d');
var questionEl = document.getElementById("quest");
var randQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "Hide The Moon Light",
      "HyperText Mail Language",
      "None the above",
    ],
    correctAnswer: "HyperText Markup Language",
  },
  {
    question: "What is <p> element used for in HTML?",
    options: [
      "To put text into parenthesis",
      "used to end paragraph with period",
      "Add certain style to text",
      "Used to define text is a paragraph",
    ],
    correctAnswer: "Used to define text is a paragraph",
  },
  {
    question: "What function can be used to loop through an Array?",
    options: [
      "Array Function",
      "While loop",
      "if /else statement",
      "For loop",
    ],
    correctAnswer: "For loop",
  },
  {
    question: "What can you store in JavaScript Array?",
    options: ["Numbers and Strings", "Booleans", "Objects", "All the above"],
    correctAnswer: "All the above",
  },
];
var questionIndex = 0;
var score = 0;


// function that allows random questions
function startQuiz() {
    getQuestion()
    setTime()
}

function getQuestion() {

  questionEl.textContent = randQuestions[questionIndex].question
  optionsABtn.textContent = randQuestions[questionIndex].options[0]
  optionsBBtn.textContent = randQuestions[questionIndex].options[1]
  optionsCBtn.textContent = randQuestions[questionIndex].options[2]
  optionsDBtn.textContent = randQuestions[questionIndex].options[3]
}
  
var secondsLeft = 10;

function setTime() {

    var timer = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "count" + " " + secondsLeft + " sec left."; 
      
      if(secondsLeft <= 0){
        clearInterval(timer);
      }
      
    }, 1000);

};

//var answerBtnsEl = options ['']
//console.log("answerBtnsEl");

function checkAnswer(event){
    optionsABtn.textContent = randQuestions[questionIndex].options[0].correctAnswer
    optionsBBtn.textContent = randQuestions[questionIndex].options[1].correctAnswer
    optionsCBtn.textContent = randQuestions[questionIndex].options[2].correctAnswer
    optionsDBtn.textContent = randQuestions[questionIndex].options[3].correctAnswer

    if(event.target.matches("button")){
        console.log("button clicked") }
    if(event.target.matches("button") === event.target.questionIndex.options.correctAnswer) {
          console.log('Correct Answer');
          score ++;
    }
    else{
          console.log('Wrong Answer');
          secondsLeft--; 
    }
      
        questionIndex++
        getQuestion()
}



playBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", getQuestion);
answerBtnsEl.addEventListener("click", checkAnswer);
