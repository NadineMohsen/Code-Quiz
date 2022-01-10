var button1 = document.getElementById("start-quiz");
var timeLeft= document.getElementById("time-left")
var question= document.getElementById("p1")
var title=document.querySelector("h1")
var quizContainer=document.getElementById("answers")
var correct = document.getElementById("correct-wrong")

var timer;
var timerCount;

var titles = ["Quiz 1","Quiz2","Quiz3","Quiz4","Quiz5"]
var questions = ["Commonly used data types DO NO INCLUDE","The conditions in an if/else statement is enclosed within",
                  "Arrays in javascript can be used to store","String values must be enclosed within _____ when being assignes in variables",
                "A very useful tool used during development and debugging for printing content to the debugger is"]
var answers = {
  ans1: ["strings","booleans","alerts","numbers"],
  ans2:["quotes","curly brackets","parentheses","square brackets"],
  ans3:["numbers and strings","other arrays","booleans","all the above"],
  ans4:["commas","curly brackets","quotes","parentheses"],
  ans5:["JavaScript","terminal/bash","for loops","console.log"]
}



// The startGame function is called when the start button is clicked
function startGame(){
  timerCount=75;
  startTimer()
  displayQuiz()
  displayChoices()
}

// The setTimer function starts and stops the timer
function startTimer(){
// Sets timer
timer = setInterval(function(){
    timerCount--;
    timeLeft.textContent= timerCount;
    
// Tests if time has run out
if (timerCount === 0) {
  // Clears interval
  clearInterval(timer);
  loseGame();
}

},1000)
}

function loseGame(){
  correct.textContent="Wrong"

}

function winGame(){
  correct.textContent="Correct"
}

//Displays quiz number and question
function displayQuiz(){
    title.textContent= titles[0];
    p1.textContent=questions[0];
}

//displays quiz choices
function displayChoices(){
  quizContainer.setAttribute("style","visibility:visible")
  button1.setAttribute("style","visibility:hidden")
  for(var i=0; i<answers.ans1.length;i++){
    quizContainer.children[i].children[0].textContent=answers.ans1[i];
  }
  userChoice();
}

function userChoice(){
 
}

// Attach event listener to start button to call startGame function on click
button1.addEventListener("click", startGame)
