const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let point, position, velocity, acc;

point = new Point(new Vector2d(200, 300), 15, getRandomColor(), false, "P");
position = point.vPos;
velocity = new Vector2d(2, 3);
acc = new Vector2d(0, 1);

animate();

function animate()
{
    context.clearRect(0, 0, width, height);
    window.requestAnimationFrame(animate);

    point.draw();
    point.vPos.draw(0,0);
    velocity.vectorSum(velocity, acc);
    position.vectorSum(position, velocity);
    point.vPos = position;
    
    if(point.vPos.dy > height)
    {
        velocity.dy = -velocity.dy;
        position.dy = height;
    }
    
    if(point.vPos.dy < 0 )
    {
        velocity.dy = -velocity.dy;
    }

    if(point.vPos.dx > width)
    {
        velocity.dx = -velocity.dx;
    }
    if(point.vPos.dx < 0 )
    {
        velocity.dx = -velocity.dx ;
    }
}