var clear=document.getElementById("clear");
var goBack=document.getElementById("go-back")
var HighScores=document.getElementById("highscores")

clear.addEventListener("click",function(){
    localStorage.clear();
    location.reload();
})

goBack.addEventListener("click",function(){
    window.location.replace("./index.html")
})

for(var i=0;i<allScores.length;i++){
    var newScore= document.createElement("li");
    newScore.textContent=allScores[i].initials + allScores[i].score;
    HighScores.appendChild(newScore)
}