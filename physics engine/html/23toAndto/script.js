const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let A, B, point, dif, goToB;

A = new GameObject(new Vector2d(100, 100), new Vector2d(0,0), new Vector2d(0,0));
B = new GameObject(new Vector2d(400, 200), new Vector2d(0,0), new Vector2d(0,0));
point = new GameObject(new Vector2d(1500,300),  new Vector2d(0,0), new Vector2d(0,0))
dif = new Vector2d(0,0);
goToB = true;

animate();

//animation loop
function animate()
{
    context.clearRect(0, 0, width,height);
    requestAnimationFrame(animate);

    A.draw(context);
    B.draw(context);
    point.draw(context);

    A.pos.draw(0,0);
    B.pos.draw(0,0);

    if (goToB == true)
    {
        dif.difVector(B.pos, point.pos);
    }
    if (goToB == false)
    {
        dif.difVector(A.pos, point.pos);
    }
    if (dif.magnitude < 3)
    {
        goToB = !goToB;
    }

    dif.magnitude = 2;

    dif.draw(point.pos.dx, point.pos.dy, getRandomColor(), 50);

    point.pos.sumVector(point.pos, dif);

}