var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var dice1 =  'images/dice'+randomNumber1+'.png';
document.querySelector(".img1").setAttribute("src",dice1);
document.querySelector(".img2").setAttribute("src",'images/dice'+randomNumber2+'.png');
var stringH1;
function heading(){
    if (randomNumber1>randomNumber2) {
        return "🚩Player 1 Wins!"
    }
    else if(randomNumber1<randomNumber2){
       return "Player 2 Wins!🚩"
    }
    else{
       return "Draw!"
    }
}
document.querySelector("h1").textContent=heading();
