var cwidth = 800
var cheight = 600
var row = 20;

function setup() {
  createCanvas(cwidth, cheight);
  for (x = 0; x <= cwidth; x += row) {
    for (y = 0; y <= cheight; y += row) {
      stroke(random(185, 255), random(132, 125), random(242, 255));
      if ( y % 3 === 0) {
        fill(random(125, 255), random(92, 125), random(222, 255));
        rect((random(x, x+30)),(random(1, 600)), (y + 20+ row), (random(1, 45)), 20, 15, 10, 5);
      }

    }
  }
}
