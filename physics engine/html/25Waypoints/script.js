const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let myCircle = new Point(new Vector2d(0,0), 20, "red", "player", false);
let waypoints = [];
let currentWaypoint = 0;
waypoints[0] = new Point(new Vector2d(100,100), 10, "rgba(0,100,100, .5)", "waypoint 1", false);
waypoints[1] = new Point(new Vector2d(500,100), 10, "rgba(0,23,100, .5)", "waypoint 2", false);
waypoints[2] = new Point(new Vector2d(500,500), 10, "rgba(0,42,53, .5)", "waypoint 3", false);
waypoints[3] = new Point(new Vector2d(100,500), 10, "rgba(0,1,253, .5)", "waypoint 4", false);

let time = 0;
let timeModifier = 0.005;

start();
function start(){
  update();
}

function update(){
  time += timeModifier;
  if (time > 1) {
    time = 0;
    currentWaypoint += 1;
    if(currentWaypoint >= waypoints.length) currentWaypoint = 0;
  }


  context.clearRect(0,0,width,height);
  requestAnimationFrame(update);

  for (let i = 0; i < waypoints.length; i++){
    waypoints[i].draw();
  }

  let prev = (currentWaypoint === 0) ? waypoints.length -1 : currentWaypoint - 1;
  console.log(currentWaypoint)
  myCircle.pos.lerp(waypoints[prev].pos, waypoints[currentWaypoint].pos, time);
  myCircle.draw();
}



