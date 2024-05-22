var ramdomNum = Math.floor(Math.random()*6)+1;
var ramdomsrc = "assets/images/dice" + ramdomNum + ".png";
document.querySelectorAll("img")[0].setAttribute("src",ramdomsrc);


var ramdomnum2 = Math.floor(Math.random() * 6)+1;
var ramdomsrc1 = "assets/images/dice" + ramdomnum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",ramdomsrc1);


    if(ramdomNum > ramdomnum2){
    document.querySelector("h1").innerHTML = "Player1 wins"
} 
else if(ramdomNum < ramdomnum2){
    document.querySelector("h1").innerHTML = "Player2 wins"
} 
else{
    document.querySelector("h1").innerHTML = " It's a draw!"
}



