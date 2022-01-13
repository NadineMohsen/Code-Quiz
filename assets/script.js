// Creating an object called questions including all the questions, choices and correct answer
var questions = [
    {question:"Commonly used data types DO NOT INCLUDE: ",
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

var header=document.getElementById("hs")
var timeContainer= document.getElementById("time")
var timeLeft= document.getElementById("time-left")
var initialText= document.getElementById("initial-text")
var title=document.querySelector("h1")
var paragraph= document.getElementById("p1")
var choicesList=document.getElementById("choices-list")
var correct = document.getElementById("correct-wrong")
var labelContainer=document.getElementById("label-container")
var buttonContainer = document.getElementById("button-container")
var button1 = document.getElementById("start-quiz");

var timer=0;
var timerCount=5;

var userQuestion;
var userChoices;
var listItem;
var qindex=0;

var element;
var score=0;

// Attach event listener to start button to call startGame function on click
button1.addEventListener("click", startGame)

// The startGame function is called when the start button is clicked
function startGame(){
  startTimer()
  displayQuiz()
}

// The setTimer function starts and stops the timer
function startTimer(){
  // Sets timer
  timer = setInterval(function(){
  timerCount--;
  timeLeft.textContent= timerCount;
  
  // Tests if time has run out
  if (timerCount <= 0) {
  //ends game
  endofGame();
  timeContainer.textContent= "Time's up";
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
    //display question
    title.textContent=userQuestion;
  }
  //display choices
  userChoices.forEach(function(newItem) {
    listItem=document.createElement("li");
    listItem.textContent= newItem;
    choicesList.appendChild(listItem);
    listItem.addEventListener("click",compare)
  });
}

//Compare choice with correct answer if the user clicked on one of the choices
function compare(event){
  element = event.target;
  if (element.matches("li")){
    //correct answer
    if(element.textContent==questions[qindex].answer){
      score++;
      correct.textContent = "Correct Answer "
    }
    //wrong answer
    else {
      timerCount = timerCount-10;
      correct.textContent = "Wrong Answer "
    }
   
  }
  choicesList.innerHTML=""
  qindex++;
  next()
}

//Either displays next question or ends game
function next(){
  if(qindex>=questions.length){
    endofGame()
  }
  else{
    displayQuiz(qindex)
  }
}

//displays score and label
function endofGame(){
  clearInterval(timer);
  choicesList.setAttribute("style","display:none")
  correct.textContent="End of quiz, your score is: "+ score+"/"+ questions.length;
  timeContainer.innerHTML=""
  header.innerHTML=""
  title.innerHTML="Your final score is: "+ timerCount; 
  
  //create Label
  var newLabel = document.createElement('label')
  newLabel.textContent="Enter yout initials "
  labelContainer.appendChild(newLabel)
  //create input for initials
  var newInput=document.createElement('input')
  newInput.textContent=""
  labelContainer.appendChild(newInput)
  //create submit button
  var submit=document.createElement('button')
  submit.textContent="Submit"
  buttonContainer.appendChild(submit)
  
  submit.addEventListener("click",submit1)
}


function submit1(){ 
  
  window.location.replace("./HighScores.html");
}


