var playBtn = document.querySelector("#start-btn");
var nextBtn = document.querySelector("#next-btn");
var timeEl = document.querySelector('.timerBox');
var scoreEl = document.querySelector('.scoreBox');
var questionEl = document.querySelector("#questions");
var answerBtnsEl = document.querySelectorAll(".option-btn");
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
  
var secondsLeft = 15;
// Function that will set timer to count down from 15sec once play button is clicked.
function setTime() {

    var timer = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "count" + " " + secondsLeft + " sec left."; 
      
      if(secondsLeft <= 0){
        clearInterval(timer);
      }
      
    }, 1500);

};

// Fuction to check if correct answer was selected
function checkAnswer(event){
    
    if(event.target.matches("button")){
        console.log("button clicked") }
    if(event.target.innerText === randQuestions[questionIndex].correctAnswer) {
          console.log('Correct Answer');
          ++score;
    }
    else{
          console.log('Wrong Answer');
          secondsLeft--; 
    }
      
        questionIndex++
        getQuestion()
}

for (var i = 0; i < answerBtnsEl.length; i++) {
    answerBtnsEl[i].addEventListener("click",checkAnswer);
}

//Function to update score everytime user selects correct answer
function userScore(e) {
    if(e.target.innerText === randQuestions[questionIndex].correctAnswer){
    ++score
    scoreEl.textContent = score;
    }
    ++score
}

playBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", getQuestion);
