const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let myPoint = new Point(new Vector2d(200,300),30,getRandomColor(), true);

function anime()
{
    context.clearRect(0,0, width, height);
    myPoint.draw(context);
}


setInterval(anime,10);



// addEventListener('mousedown', mouseDownHandler);
// addEventListener('mousemove', mouseDownHandler);
// addEventListener('mousemove', (evt) =>
// {
//     console.log('De x is ' + evt.clientX);
//     console.log('De x is ' + evt.clientY);
// });

// function mouseDownHandler(evt)
// {
//     console.log('De x is ' + evt.clientX);
//     console.log('De x is ' + evt.clientY);
// }