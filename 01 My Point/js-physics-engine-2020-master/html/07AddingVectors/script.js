const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let trans = new Vector2d(200,100);

let A, B, C, D, E, F;

A = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 20, getRandomColor(), true);
B = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 20, getRandomColor(), true);
C = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 20, getRandomColor(), true);

D = new Point(new Vector2d(0, 0), 10, getRandomColor());
E = new Point(new Vector2d(0, 0), 10, getRandomColor());
F = new Point(new Vector2d(0, 0), 10, getRandomColor());

d = new Vector2d();
e = new Vector2d();
f = new Vector2d();

let Color1, Color2;
Color1 = getRandomColor();
Color2 = getRandomColor();

function anime()
{
    context.clearRect(0,0, width,height);

    context.beginPath();
    context.fillStyle = Color1;
    context.moveTo(A.vPos.dx,A.vPos.dy);
    context.lineTo(B.vPos.dx,B.vPos.dy);
    context.lineTo(C.vPos.dx,C.vPos.dy);
    context.closePath();
    context.stroke();
    context.fill();

    A.draw(context);
    B.draw(context);
    C.draw(context);

    context.beginPath();
    context.fillStyle = Color2;
    context.moveTo(D.vPos.dx,D.vPos.dy);
    context.lineTo(E.vPos.dx,E.vPos.dy);
    context.lineTo(F.vPos.dx,F.vPos.dy);
    context.closePath();
    context.stroke();
    context.fill();

    D.vPos = d;
    E.vPos = e;
    F.vPos = f;

    D.draw(context);
    E.draw(context);
    F.draw(context);

    d.vectorSum(A.vPos, trans)
    e.vectorSum(B.vPos, trans);
    f.vectorSum(C.vPos, trans);
}


setInterval(anime, 10);