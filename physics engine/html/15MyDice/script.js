const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let Dice, DiceButton, sw, sh, roll, score, scoreList;

roll = {};

Dice = {};
Dice.image = new Image();
Dice.image.src = "images/dice.png";

scoreList = [];
for (let i = 2;  i < 12; i++)
{
    scoreList.push(0)
}

addEventListener('keydown',(e)=>
{    
    if (e.keyCode == 32)
    {
        roll.one = getRandomInt(0,5);
        roll.two = getRandomInt(0,5);
        score = roll.one + roll.two + 2;
        scoreList[score - 2]++;
    }
})

Dice.image.addEventListener('load',()=>
{
    sw = Dice.image.width / 6;
    sh = Dice.image.height;

    setInterval(animate,10);
})

function animate()
{
    context.clearRect(0, 0, width, height);
    context.drawImage(Dice.image, roll.one * sw, 0, sw, sh, 200, 200, sw, sh);
    context.drawImage(Dice.image, roll.two * sw, 0, sw, sh, 400, 200, sw, sh);
    console.log(roll);
    console.log(score, scoreList);
}