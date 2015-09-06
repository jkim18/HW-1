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

right();
if (getColor() == "blue") {
  repeatdown(3);
} else {
  repeatup(3);
}
if (getColor() == "blue") {
  right();
  down();
  up();
} else {
  left();
  down();
  up();
}
