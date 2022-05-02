// write js code here corresponding to favourites.html

var favArr = JSON.parse(localStorage.getItem("favourites")) ;
console.log(favArr)

displayData(favArr) ;

// DOM Function
function displayData(data){
        // console.log(data)
        document.querySelector("tbody").innerHTML = null ;
        data.forEach(function(el,i){
        var tableRow = document.createElement("tr") ;
        var td1 = document.createElement("td") ;
        var td2 = document.createElement("td") ;
        var td3 = document.createElement("td") ;
        var td4 = document.createElement("td") ;
        var td5 = document.createElement("td") ;
        var del = document.createElement("td") ;

        td1.innerText = el.matchNumber ;
        td2.innerText = el.teamA ;
        td3.innerText = el.teamB ;
        td4.innerText = el.date ;
        td5.innerText = el.venue ;
        del.innerText = "Delete" ;
        del.style.color = "red" ;
        del.style.cursor = "pointer"
        del.addEventListener("click",function(){
            delFunction(el,i) ;
        })
        
        tableRow.append(td1,td2,td3,td4,td5,del) ;
        document.querySelector("tbody").append(tableRow) ;
    })
}

function delFunction(el,i){
    console.log(el,i)
    favArr.splice(i,1) ;
    console.log(favArr); 
    localStorage.setItem("favourites",JSON.stringify(favArr)) ;
    displayData(favArr)
}