// write js code here corresponding to index.html
// You should add submit event on the form

// DOM variables
var form = document.querySelector("#masaiForm") ;
form.addEventListener("submit",getDAta)

var matchDataArr = JSON.parse(localStorage.getItem("schedule")) || [];

// DOM functions 
function getDAta(){
    event.preventDefault();
    var matchObj  = {
        matchNumber : form.matchNum.value ,
        teamA : form.teamA.value ,
        teamB : form.teamB.value ,
        date : form.date.value ,
        venue : form.venue.value ,
    };
    matchDataArr.push(matchObj) ;
    console.log(matchDataArr) ;
    localStorage.setItem("schedule", JSON.stringify(matchDataArr)) ;


}
