const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let points = [];

function anime()
{
    let x1 = getRandomInt(0, width);
    let y1 = getRandomInt(0, height);
    let myPoint1 = new Point(new Vector2d(x1, y1), 5, getRandomColor());

    let x2 = getRandomInt(0, width);
    let y2 = getRandomInt(0, height);
    let myPoint2 = new Point(new Vector2d(x2, y2), 5, getRandomColor());
    
    
    let x3 = getRandomInt(0, width);
    let y3 = getRandomInt(0, height);
    let myPoint3 = new Point(new Vector2d(x3, y3), 5, getRandomColor());

    let myPolygon = new Polygon(x1, y1, x2, y2, x3, y3);

    myPoint1.draw(context);
    myPoint2.draw(context);
    myPoint3.draw(context);
    myPolygon.draw(context);
}

anime();

// setInterval(anime, 1);