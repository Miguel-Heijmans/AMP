const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let img,angle;

img = new Image();
img.src = "images/cog.png";

angle = 0.1;

img.addEventListener('load',()=>
{
    setInterval(animate,10);
})

function animate()
{
    context.clearRect(0,0,width,height);
    
    context.save();
    context.translate(300,300);
    context.rotate(0);
    context.rotate(angle);
    context.drawImage(img,-300,-300,600,600);
    context.restore();

    context.save();
    context.translate(850,300);
    context.rotate(50);
    context.rotate(-angle);
    context.drawImage(img,-300,-300,600,600);
    context.restore();

    angle += 0.01;
}