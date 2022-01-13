var clear=document.getElementById("clear");
var goBack=document.getElementById("go-back")

clear.addEventListener("click",function(){
    localStorage.clear();
    location.reload();
})

goBack.addEventListener("click",function(){
    window.location.replace("./index.html")
})
