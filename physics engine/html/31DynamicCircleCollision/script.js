const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let GO_a, GO_b, lineAB;

GO_a = new GameObject(new Vector2d(width / 2,height / 2), new Vector2d(1,2), new Vector2d(0,0));
GO_b = new GameObject(new Vector2d(width / 3,height / 3), new Vector2d(-2, -5), new Vector2d(0,0));
lineAB = new Linear(0,0, "rgba(0,100,0,1)");

GO_a.radius = 75;
GO_b.radius = 75;

GO_a.color = "rgba(0,0,100,1)";
GO_b.color = "rgba(100,0,0,1)";

GO_a.draw();
GO_b.draw();

animate();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  GO_a.update();
  GO_b.update();

  GO_a.vel.drawArrow(GO_a.pos, "rgba(1,1,1,.4)", 70);
  GO_b.vel.drawArrow(GO_b.pos, "rgba(1,1,1,.4)", 70);

  drawLine(lineAB, GO_a.pos, GO_b.pos)
  lineAB.draw();

  GO_a.draw();
  GO_b.draw();
}

function drawLine(line_ab, a, b){
  let dx = b.dx - a.dx;
  let dy = b.dy - a.dy;
  line_ab.slope = dy/dx;
  line_ab.intercept = a.dy - line_ab.slope * a.dx;
}