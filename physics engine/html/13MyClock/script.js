const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let time, Clock, HourHand, hours, MinuteHand, minutes, SecondHand,seconds;

Clock = new Image();
Clock.src = "images/Clock.png";

HourHand = new Image();
HourHand.src = "images/HourHand.png";

MinuteHand = new Image();
MinuteHand.src = "images/MinuteHand.png";

SecondHand = new Image();
SecondHand.src = "images/SecondHand.png";


Clock.addEventListener('load',()=>
{
    setInterval(animate,10);
})

function animate()
{
    time = new Date();
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();

    context.clearRect(0,0,width,height);

    console.log(time);
    console.log(hours,minutes,seconds);
    context.drawImage(Clock,0,0)

    context.save();
    context.translate(Clock.width / 2,Clock.height / 2);
    context.rotate(HourHand * 2 * Math.PI / 12);
    context.drawImage(HourHand, -HourHand.width / 2, -HourHand.height)
    context.restore();

    context.save();
    context.translate(Clock.width / 2,Clock.height / 2);
    context.rotate(minutes * 2 * Math.PI / 60);
    context.drawImage(MinuteHand, -MinuteHand.width / 2, -MinuteHand.height)
    context.restore();

    context.save();
    context.translate(Clock.width / 2,Clock.height / 2);
    context.rotate(seconds * 2 * Math.PI / 60);
    context.drawImage(SecondHand, -SecondHand.width / 2,-SecondHand.height)
    context.restore();
}