var buttons = document.querySelectorAll(".drum");

for(i=0; i<buttons.length; i++){
  buttons[i].addEventListener("click", handleClick);
}
document.addEventListener("keydown",handleClick)
function handleClick(e){
  var buttonInnerHTML = this.innerHTML;
  var buttonPressInnerHTML = e.key;
  switch(buttonInnerHTML || buttonPressInnerHTML){
case "w":
  alert("w button is working");
  var tom1 = new Audio("../Sounds/tom-1.mp3");
  tom1.play();
  break;
case "a":
  alert("a button is working");
  var tom2 = new Audio("../Sounds/tom-2.mp3");
  tom2.play();
  break;
case "s":
  alert("s button is working");
  var tom3 = new Audio("../Sounds/tom-3.mp3");
  tom3.play();
  break;
case "d":
  alert("d button is working");
  var tom4 = new Audio("../Sounds/tom-4.mp3");
  tom4.play();
  break;
case "j":
  alert("j button is working");
  var crash = new Audio("../Sounds/crash.mp3");
  crash.play();
  break;
case "k":
  alert("k button is working");
  var kickBass = new Audio("../Sounds/kick-bass.mp3");
  kickBass.play();
  break;
case "l":
  alert("l button is working");
  var snare = new Audio("../Sounds/snare.mp3");
  snare.play();
  break;
default:
  console.log(buttonInnerHTML);

  }
}
