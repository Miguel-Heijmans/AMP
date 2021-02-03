const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let Highres, Lowres, scale, circel, cordinate;

Highres = new Image();
Highres.src = "images/map_highres.jpg";

Lowres = new Image();
Lowres.src = "images/map_lowres.jpg";

scale = Highres.width / Lowres.width;
cordinate = {};

circel = new Point(new Vector2d(400, 200), 100, "white", true);

setInterval(animate,10);

function animate()
{
    cordinate.x = circel.pos.dx - circel.radius;
    cordinate.y = circel.pos.dy - circel.radius;

    context.clearRect(0, 0, width, height);

    context.drawImage(Lowres, 0, 0, width, height);

    context.fillRect(cordinate.x - 5, cordinate.y - 5, 2 * circel.radius + 10, 2 * circel.radius + 10)
    context.drawImage(Highres, cordinate.x, cordinate.y, 200, 200, cordinate.x, cordinate.y, 2 * circel.radius, 2 * circel.radius);
}

