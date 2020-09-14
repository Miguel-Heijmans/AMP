const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A, B, C;
let lAB, lBC, lCA;
let MAB, MBC, MCA;
let lAMBC, lBMCA, lCMAB;
let MABC;

A = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 25, getRandomColor(), true, "A");
B = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 25, getRandomColor(), true, "B");
C = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 25, getRandomColor(), true, "C");

lAB = new LinearFunction(1,1);
lBC = new LinearFunction(1,1);
lCA = new LinearFunction(1,1);

MAB = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 12.5, getRandomColor(), false, "AB");
MBC = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 12.5, getRandomColor(), false, "BC");
MCA = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 12.5, getRandomColor(), false, "AC");

lAMBC = new LinearFunction(2,100);
lBMCA = new LinearFunction(2,100);
lCMAB = new LinearFunction(2,100);

MABC = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), 12.5, getRandomColor(), false, "ABC")

function anime()
{
    context.clearRect(0,0, width,height);

    lAB.slope = (B.pos.dy - A.pos.dy)/(B.pos.dx - A.pos.dx);
    lAB.intercept = B.pos.dy - lAB.slope * B.pos.dx;

    lBC.slope = (B.pos.dy - C.pos.dy)/(B.pos.dx - C.pos.dx);
    lBC.intercept = B.pos.dy - lBC.slope * B.pos.dx;

    lCA.slope = (A.pos.dy - C.pos.dy)/(A.pos.dx - C.pos.dx);
    lCA.intercept = A.pos.dy - lCA.slope * A.pos.dx;

    MAB.pos.dx = (B.pos.dx + A.pos.dx)/2;
    MAB.pos.dy = (B.pos.dy + A.pos.dy)/2;

    MBC.pos.dx = (B.pos.dx + C.pos.dx)/2;
    MBC.pos.dy = (B.pos.dy + C.pos.dy)/2;
    
    MCA.pos.dx = (A.pos.dx + C.pos.dx)/2;
    MCA.pos.dy = (A.pos.dy + C.pos.dy)/2;

    lAMBC.slope = (A.pos.dy - MBC.pos.dy)/(A.pos.dx - MBC.pos.dx);
    lAMBC.intercept = A.pos.dy - A.pos.dx * lAMBC.slope;
    
    lBMCA.slope = (B.pos.dy - MCA.pos.dy)/(B.pos.dx - MCA.pos.dx);
    lBMCA.intercept = B.pos.dy - B.pos.dx * lBMCA.slope;

    lCMAB.slope = (C.pos.dy - MAB.pos.dy)/(C.pos.dx - MAB.pos.dx);
    lCMAB.intercept = C.pos.dy - C.pos.dx * lCMAB.slope;

    MABC.pos.dx = (A.pos.dx + B.pos.dx + C.pos.dx)/3;
    MABC.pos.dy = (A.pos.dy + B.pos.dy + C.pos.dy)/3;
    
    lAB.draw(context);
    lBC.draw(context);
    lCA.draw(context);

    lAMBC.draw(context);
    lBMCA.draw(context);
    lCMAB.draw(context);

    A.draw(context);
    B.draw(context);
    C.draw(context);

    MAB.draw(context);
    MBC.draw(context);
    MCA.draw(context);

    MABC.draw(context);
}


setInterval(anime, 10);