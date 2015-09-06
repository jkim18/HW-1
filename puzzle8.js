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

function sprial(total){
  var count = 0;
  while (count < total) {
    repeatdown(8);
    repeatright(2);
    repeatup(8);
    repeatright(2);
    count = count + 1;
  }
}

sprial(2);
repeatdown(8);
right();
