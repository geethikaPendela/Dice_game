var random1 = Math.floor(Math.random()*6)+1;
var randomdice="images/"+"dice"+random1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdice);


var random2 = Math.floor(Math.random()*6)+1;
var randomdice2="images/"+"dice"+random2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdice2);



if(random1>random2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}