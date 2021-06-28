const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let ball, bumper;

bumper = new Point(new Vector2d(width/2, height/2), 50, "yellow", "bumper",false);
ball = new DPoint(new Vector2d(100,100),new Vector2d(1,1),new Vector2d(0,0),20,"red","ball");
ball.rad = new Vector2d(1,1);
ball.velocity = new Vector2d(4, 5);


ball.draw();
bumper.draw();

function animate(){
context.clearRect(0,0,width,height);
//updates
ball.update();
ball.rad.dx = bumper.pos.dx - ball.pos.dx;
ball.rad.dy = bumper.pos.dy - ball.pos.dy;
//drawing
ball.draw();
bumper.draw();
ball.rad.magnitude = 200;
ball.velocity.draw(context,ball.pos, 30, "blue ");
ball.rad.draw(context, ball.pos, 1, "green");

}
setInterval(animate, 10);
