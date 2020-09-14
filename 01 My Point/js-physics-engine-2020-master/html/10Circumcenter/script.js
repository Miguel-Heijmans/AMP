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
let circumCenter, distance;

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

circumCenter = new Point(new Vector2d(0, 0), 12.5, getRandomColor(), false);

function anime()
{
    context.clearRect(0,0, width,height);

    context.fillStyle = "rgba(225,225,0,0.2)";
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
    
    MAB.pos.dx = (B.pos.dx + A.pos.dx)/2;
    MAB.pos.dy = (B.pos.dy + A.pos.dy)/2;

    MBC.pos.dx = (B.pos.dx + C.pos.dx)/2;
    MBC.pos.dy = (B.pos.dy + C.pos.dy)/2;
    
    MCA.pos.dx = (A.pos.dx + C.pos.dx)/2;
    MCA.pos.dy = (A.pos.dy + C.pos.dy)/2;

    AAB.slope = -1/lAB.slope;
    AAB.intercept = MAB.pos.dy - MAB.pos.dx * AAB.slope;
    
    ABC.slope = -1/lBC.slope;
    ABC.intercept = MBC.pos.dy - MBC.pos.dx * ABC.slope;
    
    ACA.slope = -1/lCA.slope;
    ACA.intercept = MCA.pos.dy - MCA.pos.dx * ACA.slope;

    circumCenter.pos.dx = AAB.intersection(ABC).x;
    circumCenter.pos.dy = AAB.intersection(ABC).y;

    let tempX = circumCenter.pos.dx - A.pos.dx;
    let tempY = circumCenter.pos.dy - A.pos.dy;
    distance = Math.sqrt(tempX * tempX + tempY * tempY);

    context.beginPath();
    context.arc(circumCenter.pos.dx, circumCenter.pos.dy, distance, 0, 2 * Math.PI);
    context.stroke();

    lAB.draw(context);
    lBC.draw(context);
    lCA.draw(context);

    AAB.draw(context);
    ABC.draw(context);
    ACA.draw(context);

    MAB.draw(context);
    MBC.draw(context);
    MCA.draw(context);

    A.draw(context);
    B.draw(context);
    C.draw(context);

    circumCenter.draw(context);
}


setInterval(anime, 10);