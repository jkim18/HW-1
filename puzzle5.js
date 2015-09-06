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



repeatright(2);
if (getColor() == "blue") {
  down();
  right();
  right();
} else {
  up();
  right();
  right();
}
if (getColor() == "blue") {
  down();
  right();
  right();
} else {
  up();
  right();
  right();
}
if (getColor() == "blue") {
  down();
  right();
  right();
} else {
  up();
  right();
  right();
}
right();
