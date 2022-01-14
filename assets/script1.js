var clear=document.getElementById("clear");
var goBack=document.getElementById("go-back")
var HighScores=document.getElementById("highscores")

//Clear scores
clear.addEventListener("click",function(){
    localStorage.clear();
    location.reload();
})

//goes back to game
goBack.addEventListener("click",function(){
    window.location.replace("./index.html")
})

//retrieves local storage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {
        //create a list of highscores
        var createLi = document.createElement("li");
        createLi.setAttribute("class","highscores-list")
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        HighScores.appendChild(createLi);

    }
}