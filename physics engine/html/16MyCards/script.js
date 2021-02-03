const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let Cards, sw, sh, draw;

draw = {}

Cards = {};
Cards.image = new Image();
Cards.image.src = "images/cardDeck.png";

addEventListener('keydown',(e)=>
{    
    if (e.keyCode == 32)
    {
        draw.y = getRandomInt(0, 4);
        if (draw.y == 4)
        {
            draw.x = getRandomInt(0, 1);
        }
        else
        {
            draw.x = getRandomInt(0, 12);
        }
        console.log(draw.x, draw.y);
    }
})

Cards.image.addEventListener('load',()=>
{
    sw = Cards.image.width / 13;
    sh = Cards.image.height / 5;
    setInterval(animate, 10);
})

function animate()
{
    sx = draw.x * sw;
    sy = draw.y * sh;
    context.clearRect(0, 0, width, height);
    context.drawImage(Cards.image, sx, sy, sw, sh , 200, 200, sw, sh)//, roll.one * sw, 0, sw, sh, 200, 200, sw, sh);
}