const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let myPoint = new Point(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), getRandomInt(10, 39), getRandomColor());

function anime()
{
    myPoint.draw(context);
    myPoint.Update(new Vector2d(getRandomInt(0, width), getRandomInt(0, height)), getRandomInt(10, 39), getRandomColor());
}

setInterval(anime, 1);