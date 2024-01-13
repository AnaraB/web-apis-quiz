const timerTracker = document.querySelector(".timer");
//const startScreen = document.querySelector("#start-screen");
const start = document.querySelector("#start");
const question = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const codeExample = document.querySelector("#codeExample");
const options = document.querySelector("#options");
//const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const initials = document.querySelector("#initials");
const submitButton = document.querySelector("#submit");
const feedback = document.querySelector("#feedback");

let timer;
let timerCount;
let currentQuestion = '';
let optionsIndexNumber = 0;

//create init function, it's called when index.html page loads. may be it should call other functions?


// add event listener when button start is clicked 
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", function(){
  toggleDivBlocks()
  //startQuiz();

})

//create function that triggers div visibility functions, 4 divs with add or remove class "hide" 
function toggleDivBlocks(){
  const startScreen = "start-screen";
  const questionsBlock = "questions";
  const endScreen = "end-screen";
  const feedback = "feedback";

    function showDiv(element){
      let divId = document.getElementById(element);
      divId.classList.remove('hide');
      divId.classList.add('show');

    }

    function hideDiv(element){
      let divId = document.getElementById(element);
      divId.classList.add('hide');
      divId.classList.remove('show');

    }
    // write conditional statements when to show or hide div blocks 
    hideDiv(startScreen);
    showDiv(questionsBlock);

}



//quizIsOver function  is called when timer reaches ==0 OR all questions has been answered

// The startQuiz function is called when the start button is clicked
function startQuiz() {
  timerCount = 75;
  
  renderQuestions()  // displayes 1 question on screen 
  startTimer()
}



// The startTimer function starts and stops the timer and triggers quizIsOver()
// if selected answer is incorrect take away 10 sec from the timer
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerTracker.textContent = timerCount;
    if (timerCount === 0) {
      // Tests if timesIsOver condition is met OR lastQuestion has been answered
      // if (renderQuestion) {
      //   // Clears interval and stops timer
      //   clearInterval(timer);
      //   timeIsOver()
      // }
      //alert("time is over");
    }
    // Tests if time has run out
   
  }, 1000);
}
// loop through mapped array to display one question at a time 
function renderQuestions(){
  
  for(let i=0; i < javascriptQuiz.length; i++) {
    currentQuestion = javascriptQuiz[i];
    console.log(`Question 1 ${currentQuestion.question};`)
  }

}
//------------------how to render one question after another logic -------//
//createElement li and add it button to each answer option
// hoover effect on answer when mouse on 
// event click, with sound (correct or Incorrect) when answer is chosen it triggers toggleDivBlock to display feedback div visible
  
    // first grab all elements with answer buttons loop through and add eventListener "click"
    // for ( i = 0; I <numberOfAnswerButtons; i ++){
    //     document.quesrySelectorAll(".answerBtn")[i].addEventListener("click", function(){
    //         console.log(this);
    //         this.style.color = "white"  // or hoover effect       
            //  create loop   if correct play correctSound else play incorrect
            // create condition if answer is wrong take away 10sec from the timer.
    //     })
    // }

      //play sound if correct/wrong when button clicked submit 
      // var correctSound = new Audio("starter/assets/sfx/correct.wav")
      // audio.play()
      // var incorrectSound = new Audio("starter/assets/sfx/incorrect.wav")
      // audio.play()
//feedback diplayes coorect or wrong message
//display next question 



// when all questions have been answered  ALL DONE! message is displayed and
    // message with the  final score {studentScore} displayed on next line 
    // input form text to type student initials and sumbit button.
    // When submit is clicked redirect to highscore.html page

//-------------what we reneder on higscore.html page-----------------------//
//line 8 in highscores.html, under title create dataset visible line with  student's quizz results with initials and scores. 
// #clear CLEAR HIGHSCORE BUTTON hides the line with student results 
// GO BACK BUTTTON navigates to index.html page to start quizz again


