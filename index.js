var rn1=Math.floor(Math.random()*6)+1;
var ri1="dice"+rn1+".png";
var ris1="images/"+ri1;
document.querySelectorAll("img")[0].setAttribute("src" , ris1);

var rn2=Math.floor(Math.random()*6)+1;
var ri2="dice"+rn2+".png";
var ris2="images/"+ri2;
document.querySelectorAll("img")[1].setAttribute("src",ris2);

if(rn1>rn2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(rn1==rn2){
    document.querySelector("h1").innerHTML="Draw!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
