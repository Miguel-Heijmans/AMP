const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A,B,C,D,E,F,interception;

A = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 20, getRandomColor(), true);
B = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 20, getRandomColor(), true);
C = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 20, getRandomColor(), true);
D = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 20, getRandomColor(), true);
E = new LinearFunction(1,1);
F = new LinearFunction(1,1);

interception = new Point(new Vector2d(0,0), 10, getRandomColor())

function anime()
{
    context.clearRect(0,0, width,height);
    A.draw(context);
    B.draw(context);
    C.draw(context);
    D.draw(context);

    E.slope = (B.pos.dy - A.pos.dy)/(B.pos.dx - A.pos.dx);
    E.intercept = B.pos.dy - E.slope * B.pos.dx;
    E.draw(context);

    F.slope = (D.pos.dy - C.pos.dy)/(D.pos.dx - C.pos.dx);
    F.intercept = D.pos.dy - F.slope * D.pos.dx;
    F.draw(context);

    interception.pos.dx = E.intersection(F).x;
    interception.pos.dy = E.intersection(F).y;
    interception.draw(context);
}


setInterval(anime, 10);