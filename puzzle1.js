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

repeatdown(7);
repeatright(5);
repeatup(2);
repeatright(2);
