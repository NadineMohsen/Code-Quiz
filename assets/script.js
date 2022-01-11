// Creating an object called questions including all the questions, choices and correct answer
var questions = [
    {question:"Commonly used data types DO NO INCLUDE: ",
    choices: ["strings","booleans","alerts","numbers"],
    answer: "alerts" },

    {question:"The conditions in an if/else statement is enclosed within: ",
    choices: ["quotes","curly brackets","parentheses","square brackets"],
    answer: "parentheses" },

    {question:"Arrays in javascript can be used to store, ",
    choices: ["numbers and strings","other arrays","booleans","all the above"],
    answer: "all the above" },

    {question:"String values must be enclosed within _____ when being assignes in variables: ",
    choices: ["commas","curly brackets","quotes","parentheses"],
    answer: "quotes" },

    { question:"A very useful tool used during development and debugging for printing content to the debugger is: ",
    choices: ["JavaScript","terminal/bash","for loops","console.log"],
    answer: "console.log" },
]

var button1 = document.getElementById("start-quiz");
var timeLeft= document.getElementById("time-left")
var initialText= document.getElementById("initial-text")
var buttonContainer = document.getElementById("button-container")
var paragraph= document.getElementById("p1")
var title=document.querySelector("h1")
var choicesList=document.getElementById("choices-list")
var correct = document.getElementById("correct-wrong")

var timer;
var timerCount=75;
var penalty=10;
var userQuestion;
var userChoices;
var listItem;
var qindex=0;

// Attach event listener to start button to call startGame function on click
button1.addEventListener("click", startGame)

// The startGame function is called when the start button is clicked
function startGame(){
  startTimer()
  displayQuiz()
  // displayChoices()
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
  // loseGame();
  timeLeft.textContent= "Time's up";
}
},1000)
}

//Displays quiz question and choices
function displayQuiz(qIndex){
  // Clears existing data 
  title.innerHTML="";
  paragraph.innerHTML="";
  buttonContainer.innerHTML="";
  // For loops to loop through all info in array
  for (var i=0;i<questions.length;i++){
    userQuestion = questions[qindex].question;
    userChoices=questions[qindex].choices;
    title.textContent=userQuestion;
  }
  userChoices.forEach(function(newItem) {
    listItem=document.createElement("li");
    listItem.textContent= newItem;
    choicesList.appendChild(listItem);
    // listItem.addEventListener("click",compare)
  });
  
}

// qindex++;









// function loseGame(){
//   correct.textContent="Wrong"

// }

// function winGame(){
//   correct.textContent="Correct"
// }


// //displays quiz choices
// function displayChoices(){
//   quizContainer.setAttribute("style","visibility:visible")
//   button1.setAttribute("style","visibility:hidden")
//   for(var i=0; i<answers.ans1.length;i++){
//     quizContainer.children[i].children[0].textContent=answers.ans1[i];
//   }
//   userChoice();
// }

// function userChoice(){
 
// }


