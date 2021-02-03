const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let sw, sh, sx, sy, x, y, w, h, vx, vy;
let greenTank, blueTank;
let spriteSheet;

spriteSheet = new Image();
spriteSheet.src = "images/tanksheet.png";

greenTank = {};
greenTank.animationArray = [1, 2, 3, 4, 5, 6, 7, 8];
greenTank.index = 0;
greenTank.direction = 0;
greenTank.x = 100;
greenTank.y = 100;
greenTank.vx = 0;
greenTank.vy = -20;

greenTank.sw = 84;
greenTank.sh = 84;
greenTank.w = 84;
greenTank.h = 84;
greenTank.draw = function()
{
    greenTank.sx = greenTank.animationArray[greenTank.index] * 84;
    greenTank.sy = Math.floor(greenTank.animationArray[greenTank.index]/8) * 84;

    context.save();
    context.translate(greenTank.x, greenTank.y);
    context.rotate(greenTank.direction);

    context.drawImage(spriteSheet, greenTank.sx, greenTank.sy, greenTank.sw, greenTank.sh, -42, -42, greenTank.w, greenTank.h);
    context.restore();
    // console.log("sx = " + greenTank.sx, "sy = " + greenTank.sy, "sw = " + greenTank.sw, "sh = " + greenTank.sh, "x = " + greenTank.x, "y = " + greenTank.y, "w = " +greenTank. w, "h = " + greenTank.h)
}

greenTank.Update = function()
{
    greenTank.x += greenTank.vx;
    greenTank.y += greenTank.vy;

    if (greenTank.y < 0)
    {
        greenTank.y = height;
    }
    if (greenTank.x < 0)
    {
        greenTank.x = width;
    }
    if (greenTank.y > height)
    {
        greenTank.y = 0;
    }
    if (greenTank.x > width)
    {
        greenTank.x = 0;
    }
}

window.addEventListener('keydown',(input)=>
{
    console.log(input.key);
    switch (input.key) {
        case "w":
        case "ArrowUp":
            greenTank.vx = 0;
            greenTank.vy = -10;
            greenTank.direction = 0 
            break;
        case "a":
        case "ArrowLeft":
            greenTank.vx = -10;
            greenTank.vy = 0;
            greenTank.direction = 1.5 * Math.PI;
            break;
        case "s":
        case "ArrowDown":
            greenTank.vx = 0;
            greenTank.vy = 10;
            greenTank.direction =  Math.PI;
            break;
        case "d":
        case "ArrowRight":
            greenTank.vx = 10;
            greenTank.vy = 0;
            greenTank.direction = 0.5 * Math.PI;
            break;
    }
})

blueTank = {};
blueTank.animationArray = [9, 10, 11, 12, 13, 14, 15, 16];
blueTank.index = 0;
blueTank.x = 200;
blueTank.y = 200;
blueTank.draw = function()
{
    blueTank.sx = (blueTank.animationArray[blueTank.index] - blueTank.animationArray.length) * 84;
    blueTank.sy = Math.floor(blueTank.animationArray[blueTank.index]/8) * 84;
    blueTank.sw = 84;
    blueTank.sh = 84;
    blueTank.w = 84;
    blueTank.h = 84;
    blueTank.vx = 0;
    blueTank.vy = -25;

    context.drawImage(spriteSheet, blueTank.sx, blueTank.sy, blueTank.sw, blueTank.sh, blueTank.x, blueTank.y, blueTank.w, blueTank.h);
    // console.log("sx = " + blueTank.sx, "sy = " + blueTank.sy, "sw = " + blueTank.sw, "sh = " + blueTank.sh, "x = " + blueTank.x, "y = " + blueTank.y, "w = " + blueTank.w, "h = " + blueTank.h)
}

blueTank.Update = function()
{
    blueTank.x += blueTank.vx;
    blueTank.y += blueTank.vy;

    if (blueTank.y < 0)
    {
        blueTank.y = height
    }
}

spriteSheet.addEventListener('load',()=>
{
    sw = spriteSheet.width/8;
    sh = spriteSheet.height/4;
    setInterval(animate, 100);
})

function animate()
{
    context.clearRect(0, 0, width, height);
    greenTank.draw();
    greenTank.Update();
    greenTank.index += 1;
    if (greenTank.index >= greenTank.animationArray.length - 1)
    {
        greenTank.index = 0
    }

    /*
    blueTank.draw();
    blueTank.Update();
    blueTank.index += 1;
    if (blueTank.index >= blueTank.animationArray.length - 1)
    {
        blueTank.index = 0
    }
    */
}