var button1 = document.getElementById("start-quiz");
var timeLeft= document.getElementById("time-left")

var timer;
var timerCount;


// The startGame function is called when the start button is clicked
function startGame(){
  timerCount=75;
  startTimer()
}

// The setTimer function starts and stops the timer
function startTimer(){
// Sets timer
timer = setInterval(function(){
    timerCount--;
    timeLeft.textContent= timerCount;
    
},1000)
}

// Attach event listener to start button to call startGame function on click
button1.addEventListener("click", startGame)

