
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const navbarOffset = 0;


// begin hier met jouw code voor deze opdracht
let A,B,S,line, ball, COLLISION

function setup(){
  COLLISION = false;
  A = new Point(new Vector2d(100,100),10,"yellow", "",true);
  B = new Point(new Vector2d(700,300),10,"lightgreen", "",true);
  S = new Point(new Vector2d(550, 300), 20, "GREEN","", false);
  line = new Linear(1, 1);

  l = new Linear(1,1);
  m = new Linear(1,1);

  player = {};
  player.velocity = new Vector2d(4,5);
  player.point = new Point(new Vector2d(100, 700),20,"red", "",false);
  player.rad = new Vector2d(1,1);
  player.tan = new Vector2d(1,1);
  player.acc = new Vector2d(0,0)

  player.point.SetBoxed(true);

  i = new Vector2d(1,1);
  j = new Vector2d(-1,1);
  i.r = 1;
  j.r = 1;

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height)

  //fix the line between player and other line
  l.defineByTwoPoints(A,B);
  l.draw();

  m.slope = -1 / l.slope;
  m.intercept = player.point.pos.dy - player.point.pos.dx * m.slope;
  m.draw(context);

  S.dx = l.intersection(m).x;
  S.dy = l.intersection(m).y;

  A.draw();
  B.draw();

  S.pos.dx = l.intersection(m).x;
  S.pos.dy = l.intersection(m).y;
  S.draw();

  player.rad.dx = S.pos.dx - player.point.pos.dx; //distance between 2 vectors
  player.rad.dy = S.pos.dy - player.point.pos.dy;//distance between 2 vectors

  player.tan.dx = player.rad.dy; //set tan to rad
  player.tan.dy = -player.rad.dx; //set tan to rad

  COLLISION = player.rad.magnitude < player.point.radius; //Check if there is a collision with the line

  player.rad.magnitude = 1;
  player.rad.magnitude = player.velocity.dot(player.rad); //velocity * tan

  player.tan.magnitude = 1;
  player.tan.magnitude = player.velocity.dot(player.tan); //velocity * tan

  //fix the collision
  if(COLLISION){
    player.rad.dx = -player.rad.dx;
    player.rad.dy = -player.rad.dy;
    player.velocity.sumVector(player.rad,player.tan);
  }

  S.draw();
  player.point.update(player.velocity, player.acc); // update player
  player.velocity.drawArrow(player.point.pos, "white", 25); //draw arrow
  player.rad.drawArrow(player.point.pos, "blue", 25); //draw arrow
  player.tan.drawArrow(player.point.pos, "red", 25); //draw arrow
  player.point.draw(); //draw point
}


setup();