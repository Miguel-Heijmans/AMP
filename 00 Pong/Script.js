// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// 

window.addEventListener('keydown', KeyHandler)

function KeyHandler(event)
{
    console.log(event);
    if (event.key == "s")
    {
        PlayerOne.y += 5;
    }
    else if (event.key == "w")
    {
        PlayerOne.y -= 5;
    }

    console.log(event);
    if (event.key == "ArrowDown")
    {
        PlayerTwo.y += 5;
    }
    else if (event.key == "ArrowUp")
    {
        PlayerTwo.y -= 5;
    }
}

// 

let PlayerOne = {};

PlayerOne.x = 20;
PlayerOne.y = 350;
PlayerOne.width = 20;
PlayerOne.height = 200;

PlayerOne.draw = function()
{
    context.fillRect(PlayerOne.x, PlayerOne.y, PlayerOne.width, PlayerOne.height);
}

// 

let PlayerTwo = {};

PlayerTwo.x = 1500;
PlayerTwo.y = 350;
PlayerTwo.width = 20;
PlayerTwo.height = 200;

PlayerTwo.draw = function()
{
    context.fillRect(PlayerTwo.x, PlayerTwo.y, PlayerTwo.width, PlayerTwo.height);
}

// 

let ball = {};

ball.x = 300;
ball.y = 350;
ball.height = 20;
ball.width = 20;
ball.speedX = 3;
ball.speedY = 4;

ball.update = function()
{
    ball.x += ball.speedX;
    ball.y += ball.speedY;
    ball.width = 20;
    if (ball.y > canvas.height - ball.width)
    {
        ball.speedY = -ball.speedY;
    }
    
    else if (ball.y < 0)
    {
        ball.speedY = -ball.speedY;
    }
    
    else if (ball.x > canvas.width)
    {
        ball.x = canvas.width/2;
    }
    
    else if (ball.x < -ball.width)
    {
        ball.x = canvas.width/2;
    }

    if (ball.x < PlayerTwo.x + PlayerTwo.width &&
        ball.x + ball.width > PlayerTwo.x &&
        ball.y < PlayerTwo.y + PlayerTwo.height &&
        ball.y + ball.height > PlayerTwo.y)
    {
        ball.speedX = -ball.speedX;
    }

    else if (ball.x < PlayerOne.x + PlayerOne.width &&
        ball.x + ball.width > PlayerOne.x &&
        ball.y < PlayerOne.y + PlayerOne.height &&
        ball.y + ball.height > PlayerOne.y)
    {
        ball.speedX = -ball.speedX;
    }
}

ball.draw = function()
{
    context.fillRect(ball.x, ball.y, ball.width, ball.height);
}

let score = {}
score.PlayerOne = 0;
score.PlayerTwo = 0;
score.x = 100;
score.y = 100;
score.font = "Verdana";
score.fontWidth = "20px";

score.draw = function()
{
    score.font = score.fontWidth + score.font;
    context.filltext(score.PlayerOne + "-" + score.PlayerTwo, score.x, score.y);
}

function loop()
{
    context.clearRect(0,0,width,height);
    ball.update();
    ball.draw();
    PlayerOne.draw();
    PlayerTwo.draw();
    score.draw();
}

setInterval(loop, 10);
