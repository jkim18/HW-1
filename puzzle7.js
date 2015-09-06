function repeatdown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}

function repeatright(total) {
  var count = 0;
  while (count < total) {
    right();
    count = count + 1;
  }
}

function repeatup(total) {
  var count = 0;
  while (count < total) {
    up();
    count = count + 1;
  }
}


function move(direction){
  getColor();
  while(getColor()!="red"){
    direction();
  }
  if(getColor()=="red"){
    right();
    right();
  }
}

function loop(total){
  var count = 0;
  while (count < total) {
  move(down);
  move(up);
    count = count + 1;
  }
}

loop(2);
move(down);
