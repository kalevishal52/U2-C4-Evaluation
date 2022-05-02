// write js code here corresponding to matches.html

var matchShedulArr = JSON.parse(localStorage.getItem("schedule")) ;
// console.log(matchShedulArr);
var addToFavArr = JSON.parse(localStorage.getItem("favourites")) || [] ;

var filterArr = matchShedulArr ;
document.querySelector("#filterVenue").addEventListener("change",filterFn)
 
displayData(matchShedulArr) ;

// DOM Function
function displayData(data){
        // console.log(data)
        document.querySelector("tbody").innerHTML = null ;
        data.forEach(function(el){
        var tableRow = document.createElement("tr") ;
        var td1 = document.createElement("td") ;
        var td2 = document.createElement("td") ;
        var td3 = document.createElement("td") ;
        var td4 = document.createElement("td") ;
        var td5 = document.createElement("td") ;
        var addFav = document.createElement("td") ;

        td1.innerText = el.matchNumber ;
        td2.innerText = el.teamA ;
        td3.innerText = el.teamB ;
        td4.innerText = el.date ;
        td5.innerText = el.venue ;
        addFav.innerText = "Add to Favouraits" ;
        addFav.style.color = "green" ;
        addFav.style.cursor = "pointer"
        addFav.addEventListener("click",function(){
            addFavFunction(el)
        })
        
        tableRow.append(td1,td2,td3,td4,td5,addFav) ;
        document.querySelector("tbody").append(tableRow) ;

    })
}

function addFavFunction(el){
    console.log(el)
    addToFavArr.push(el) ;
    localStorage.setItem("favourites",JSON.stringify(addToFavArr)) ;
    // if(addToFavArr.length == 0){
    //     addToFavArr.push(el) ;
    //     localStorage.setItem("favourites",JSON.stringify(addToFavArr)) ;
    // }
    // else{
    //     var present = false ;
    //     for(let i = 0; i < addToFavArr.length; i++)
    //     {
    //         if(el.matchNumber == addToFavArr[i].matchNumber && el.date == addToFavArr[i].data){
    //             present = true ;
    //         }
    //     }
    //     if(present == true){
    //         alert("product Allready Added");
    //     }   
    //     else{
    //         addToFavArr.push(el) ;
    //     localStorage.setItem("favourites",JSON.stringify(addToFavArr)) ;
    //     }        
    // }  
}

function filterFn(){
    var selected = document.querySelector("#filterVenue").value ;
    console.log(selected)
    console.log(filterArr); 
    if(selected == "none"){
        displayData(matchShedulArr)
    }
    else{
        var output = filterArr.filter(function(element){
            return element.venue == selected 
        })
        console.log(output) 
        displayData(output)
    }

    

}