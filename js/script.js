// add event listener / function so that when you click on a box, the background color changes
// then, make it so that if a user clicks on a box a second time, change the border radius of the box

// BONUS: Make it so only one box can be your new color at a time
var boxes = document.getElementsByClassName("boxes");

for(i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", boxFunction);
}


function boxFunction(e){
	for(i = 0; i < boxes.length; i++) {
  	if (boxes[i].classList.contains('pink') && boxes[i].classList.contains('round-edges')) {
      boxes[i].classList.remove('pink');
      boxes[i].classList.remove('round-edges');
    }
	}

  if (e.target.classList.contains('pink')) {
      e.target.classList.add('round-edges');
  } else if (e.target.classList.contains('round-edges')) {
  	e.target.classList.remove('round-edges');
    e.target.classList.remove('pink');
  } else {
      e.target.classList.add('pink');
  }
}
