const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A,B,C,L,M;

A = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 20, getRandomColor(), true);
B = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 20, getRandomColor(), true);
C = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 20, getRandomColor(), true);
L = new LinearFunction(1,1);
M = new LinearFunction(1,1);

function anime()
{
    context.clearRect(0,0, width,height);

    A.draw(context);
    B.draw(context);
    C.draw(context);

    L.slope = (B.pos.dy - A.pos.dy)/(B.pos.dx - A.pos.dx);
    L.intercept = B.pos.dy - L.slope * B.pos.dx;
    L.draw(context);

    M.slope = -1/L.slope;
    M.intercept = C.pos.dy - C.pos.dx * M.slope;
    M.draw(context);
}

setInterval(anime, 10);