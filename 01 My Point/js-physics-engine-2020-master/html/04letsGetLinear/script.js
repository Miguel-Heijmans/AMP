const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let myLine = new LinearFunction(0.5,300);

let A = new Point(new Vector2d(100, 100), 20, "blue", true);
let B = new Point(new Vector2d(500, 200), 20, "red", true);

function anime()
{
    context.clearRect(0,0,width,height);

    A.draw(context);
    B.draw(context);

    myLine.slope = (B.pos.dy - A.pos.dy)/(B.pos.dx - A.pos.dx);

    myLine.intercept = B.pos.dy - myLine.slope * B.pos.dx;


    myLine.draw(context);
}

setInterval(anime, 10);