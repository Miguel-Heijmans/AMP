const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

//mycode
let playercount = 0;
let players = [];

let waypoints = [];
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
  //update
  context.clearRect(0,0,width,height);
  requestAnimationFrame(update);
  //Timer
  for (let i = 0; i < players.length; i++){
    players[i].time += timeModifier;
    if (players[i].time > 1) {
      players[i].time = 0;
      players[i].waypoint++;
      if(players[i].waypoint >= waypoints.length) players[i].waypoint = 0;
    }
  }

  //draw waypoints
  for (let i = 0; i < waypoints.length; i++){
    waypoints[i].draw();
  }
  //draw players
  for (let i = 0; i < players.length; i++){
    players[i].point.draw();
  }
  //update players
  for (let i = 0; i < players.length; i++){
    let prev = (players[i].waypoint === 0) ? waypoints.length -1 : players[i].waypoint - 1;
    players[i].point.pos.lerp(waypoints[prev].pos, waypoints[players[i].waypoint].pos, players[i].time);
  }
  // let prev = (currentWaypoint === 0) ? waypoints.length -1 : currentWaypoint - 1;
  // myCircle.pos.lerp(waypoints[prev].pos, waypoints[currentWaypoint].pos, time);
  // myCircle.draw();
}

document.addEventListener("mousedown", (event)=>{
  console.log("CLICK!")
  playercount++;
  let current = players.length;
  players[current] = new player();
  players[current].point.pos.dx = event.pageX;
  players[current].point.pos.dy = event.pageY;
})

class player{
  constructor() {
    this.waypoint = 1;
    this.point = new Point(new Vector2d(100,100), 10, "red", "player" + playercount, false);
    this.time = 0;
  }
}


