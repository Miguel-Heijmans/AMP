const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A, B, C;
let lAB, lBC, lCA;
let AAB, ABC, ACA;
let MAB, MBC, MCA;

A = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 25, getRandomColor(), true, "A");
B = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 25, getRandomColor(), true, "B");
C = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 25, getRandomColor(), true, "C");

lAB = new LinearFunction(1,1);
lBC = new LinearFunction(1,1);
lCA = new LinearFunction(1,1);

AAB = new LinearFunction(1,1);
ABC = new LinearFunction(1,1);
ACA = new LinearFunction(1,1);

MAB = new Point(new Vector2d(0, 0), 12.5, getRandomColor(), false, "AB");
MBC = new Point(new Vector2d(0, 0), 12.5, getRandomColor(), false, "BC");
MCA = new Point(new Vector2d(0, 0), 12.5, getRandomColor(), false, "AC");

function anime()
{
    context.clearRect(0,0, width,height);

    context.fillStyle = "rgba(225,225,0,0.4)";
    context.moveTo(A.pos.dx,A.pos.dy);
    context.lineTo(B.pos.dx,B.pos.dy);
    context.lineTo(C.pos.dx,C.pos.dy);
    context.closePath();
    context.stroke();
    context.fill();

    lAB.slope = (B.pos.dy - A.pos.dy)/(B.pos.dx - A.pos.dx);
    lAB.intercept = B.pos.dy - lAB.slope * B.pos.dx;

    lBC.slope = (B.pos.dy - C.pos.dy)/(B.pos.dx - C.pos.dx);
    lBC.intercept = B.pos.dy - lBC.slope * B.pos.dx;

    lCA.slope = (A.pos.dy - C.pos.dy)/(A.pos.dx - C.pos.dx);
    lCA.intercept = A.pos.dy - lCA.slope * A.pos.dx;
    
    AAB.slope = -1/lAB.slope;
    AAB.intercept = C.pos.dy - C.pos.dx * AAB.slope;
    
    ABC.slope = -1/lBC.slope;
    ABC.intercept = A.pos.dy - A.pos.dx * ABC.slope;
    
    ACA.slope = -1/lCA.slope;
    ACA.intercept = B.pos.dy - B.pos.dx * ACA.slope;

    xs = (AAB.intercept - lBC.intercept) / (ABC.slope - lBC.slope);
    MAB = AAB * xs + lBC.intercept;

    lAB.draw(context);
    lBC.draw(context);
    lCA.draw(context);

    AAB.draw(context);
    ABC.draw(context);
    ACA.draw(context);

    A.draw(context);
    B.draw(context);
    C.draw(context);

    MAB.draw(context);
}


setInterval(anime, 10);