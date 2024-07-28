var randomNumber1 = Math.floor(Math.random()*6)+1; //Random number between 1 and 6

var randomNumber2 =Math.floor(Math.random()*6)+1;

//Creating a file name for dice image
var randomDiceImageLeft ="images/dice"+ randomNumber1 + ".png";

var randomDiceImageRight = "images/dice"+randomNumber2 +".png";

//get the left die and set it to a new src attribute 
var leftDiceImage = document.querySelectorAll("img")[0].setAttribute("src",randomDiceImageLeft);

var rightDiceImage = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageRight);



