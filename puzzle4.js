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
    count = count +1;
  }
}

repeatdown(4);
right();
var notWhite = getColor();
down();
setColor(notWhite);
repeatright(3);
up();
var diffColor = getColor();
down();
setColor(diffColor);
repeatright(2);
