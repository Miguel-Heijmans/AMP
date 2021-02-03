const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let PointA, PointB, Arrow, dx, dy;

PointA = new Point(new Vector2d(100, 100), 30, getRandomColor(), true, "A");
PointB = new Point(new Vector2d(400, 300), 30, getRandomColor(), true, "B");

Arrow = {};
Arrow.sw = 150;
Arrow.sh = 10;
Arrow.hh = 20;
Arrow.hw = 50;
Arrow.color = getRandomColor();

Arrow.draw = function()
{
    context.beginPath();
    context.fillStyle = Arrow.color;
    context.moveTo(0, 0);
    context.lineTo(0, Arrow.sh);
    context.lineTo(Arrow.sw, Arrow.sh);
    context.lineTo(Arrow.sw, Arrow.hh);
    context.lineTo(Arrow.sw + Arrow.hw, 0);
    context.lineTo(Arrow.sw, -Arrow.hh);
    context.lineTo(Arrow.sw, -Arrow.sh);
    context.lineTo(0, -Arrow.sh);
    context.closePath();
    context.stroke();
    context.fill();
}

animate();

function animate()
{
    dx = PointB.pos.dx - PointA.pos.dx;
    dy = PointB.pos.dy - PointA.pos.dy;

    context.clearRect(0, 0, width, height);
    window.requestAnimationFrame(animate);
    
    PointB.draw();

    context.save();
    context.translate(PointA.pos.dx, PointA.pos.dy);
    context.rotate(Math.atan2(dy, dx));
    Arrow.draw();
    context.restore();

    PointA.draw();
}