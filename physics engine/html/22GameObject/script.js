const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// declare namespace en scope
let GameObjects;

// assign values
GameObjects = [];
for(let i=0; i<10; i++)
{
    let posX = getRandomInt(20, width-20);
    let posY = getRandomInt(20, height-120);
    let GO = new GameObject(new Vector2d(posX, posY), new Vector2d(getRandomInt(-5, 5), 0), new Vector2d(0, 0.2));
    GameObjects.push(GO);
}

animate();

//animation loop
function animate()
{
    context.clearRect(0, 0, width,height);
    requestAnimationFrame(animate);

    for(let i=0; i<GameObjects.length; i++)
    {   
        GameObjects[i].update();
        GameObjects[i].draw(context);
        GameObjects[i].vel.draw(GameObjects[i].pos.dx,GameObjects[i].pos.dy,"rgba(255,0,0,0.2)",10)
    }
}